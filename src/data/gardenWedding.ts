// Walima date, programme and venue verified against the supplied invitation card.
// Preserve the card's spelling of Attique. No additional programme times inferred.
export const gardenWedding = {
  groom: 'Dr. Hafiz Muhammad Attique Zahid',
  bride: 'Umaira Mehmood Khan',
  hosts: ['Mr. & Mrs. Sher Ali', 'Mr. & Mrs. Abdul Qayyum Zahid'],
  brideParents: 'Mr. & Mrs. Mehmood Yaqoob Khan',
  timezone: 'Asia/Karachi',
  countdownTarget: '2026-11-01T19:00:00+05:00',
  contacts: [
    { display: '0300-6808566', phone: '+923006808566', whatsapp: '923006808566' },
    { display: '0303-6580601', phone: '+923036580601', whatsapp: '923036580601' },
  ],
  rsvp: ['Haji Rasheed (Late)', 'Aslam Nadeem (KAR)', 'M. Hanif', 'M. Ayub'],
  lookingForward: ['Mr. & Mrs. Naveed Zahid', 'Rizwan Chohan', 'Amjad Mumtaz', 'Mubashir Imtiaz', 'Mr. Huzaifa Zahid', 'Muhammad Hassan Naveed', 'Muhammad Fateh Naveed'],
  events: [
    { id: 'walima', name: 'Walima', day: 'Sunday', date: '1 November 2026', dayNumber: '01', month: 'November', start: '2026-11-01T19:00:00+05:00', venueId: 'hall', times: [{ label: 'Reception', time: '7:00 PM' }, { label: 'Dinner', time: '8:00 PM' }] },
  ],
  venues: [
    { id: 'hall', title: 'The Grand Palace Banquet Hall', address: 'New Central Jail Road, Bahawalpur', events: 'Walima' },
  ],
} as const;
