export const tourItemCollectionQuery = `{
  tourItemCollection{
    items{
      date
      place
      city
      soldOut
      country
      ticketLink
      videoLink
      sys{
        id
      }
    }
  }
}
`;

export const tracksItemCollectionQuery = `{
  trackCollection{
    items{
      sys{
        id
      }
      date
      title
      link{
        url
      }
      cover{
      url
      }
    }
  }
}
`;

export const newsItemCollectionQuery = `{
  newsItemCollection {
    items {
      sys {
        id
      }
      title
      date
      cover{
        url
      }
    }
  }
}
`