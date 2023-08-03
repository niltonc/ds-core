import { people } from '@/mock/peoples';

export default function Example() {
  return (
    <ul role="list" className="ul">
      {people.map((person) => (
        <li key={person.email} className="li">
          <div className="imagecontainer">
            <img className="imgurl" src={person.imageUrl} alt="" />
            <div className="nameemail">
              <p className="name">{person.name}</p>
              <p className="email">{person.email}</p>
            </div>
          </div>
          <div className="actioncontainer">
            <p className="role">{person.role}</p>
            {person.lastSeen ? (
              <p className="lastseen">
                Last seen{' '}
                <time dateTime={person.lastSeenDateTime}>
                  {person.lastSeen}
                </time>
              </p>
            ) : (
              <div className="onlinecontainer">
                <div className="circular">
                  <div className="bola" />
                </div>
                <p className="textonline">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
