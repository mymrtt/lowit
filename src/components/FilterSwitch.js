export default {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: '#F8F8F8',
      margin: 0,
      padding: 0,
      color: '#9DA5AB',
      fontFamily: 'Roboto, Regular',
      fontSize: '11px',
      cursor: 'pointer',
    },
    node: {
      base: {
        // position: 'relative'
      },
      link: {
        // cursor: 'pointer',
        // position: 'relative',
        padding: '0px 5px',
        display: 'block'
      },
      activeLink: {
        background: '#31363F'
      },
      toggle: {
        base: {
          // position: 'relative',
          display: 'inline-block',
          verticalAlign: 'top',
          marginLeft: '0px',
          height: '24px',
          width: '24px'
        },
        wrapper: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '-5px 0 0 -5px',
          height: '10px'
        },
        height: 10,
        width: 10,
        arrow: {
          fill: '#00BCD4',
          strokeWidth: 0
        }
      },
      header: {
        base: {
          display: 'inline-block',
          verticalAlign: 'top',
          color: '#000000'
        },
        connector: {
          width: '2px',
          height: '12px',
          borderLeft: 'solid 2px black',
          borderBottom: 'solid 2px black',
          // position: 'absolute',
          top: '0px',
          left: '-21px'
        },
        title: {
          lineHeight: '24px',
          verticalAlign: 'middle'
        }
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '3px'
      },
      loading: {
        color: '#E2C089'
      }
    }
  }
};