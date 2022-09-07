import styled from 'styled-components'

export const Styles = styled.div`
table {
  width: 350px;
  border-spacing: 0;
  border-bottom: 1px solid #191970;;
  tr {
    
    th {
      color: #fff;
      background: #5F9EA0	
    }
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
  th,
  td {
    margin: 0;
    padding: 0.5rem;
    border-bottom: 1px solid #191970;
    border-right: 1px solid #191970;
    width: 1%;
    :last-child {
      border-right: 0;
    }
  }
  .pagination {
    padding: 0.5rem;
  }
}
`