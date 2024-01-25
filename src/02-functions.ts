import { colleagues, friends } from './01-basics';

import { Friend, Colleague, EmailContact, FriendInfo  } from './myTypes'

function older(f: Friend): string {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

function allorder(friends: Friend[]): string[] {
    return friends.map(friend => older(friend));
}

console.log(older(friends[0]));
console.log(allorder(friends));

// Find the colleague with the highest extension number.



// New Function: allOlder
/**
 * The function "allOlder" takes an array of Friend objects, increments their age by 1, and returns an
 * array of strings indicating the updated age of each friend.
 * @param {Friend[]} friends - An array of objects representing friends. Each friend object has two
 * properties: name (string) and age (number).
 * 
 * @returns The function `allOlder` returns an array of strings. Each string in the array represents
 * the updated age of a friend in the `friends` array.
 */
function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => {
        friend.age += 1;
        return `${friend.name} is now ${friend.age}`;
    });
}

console.log(allOlder(friends));  // Log the updated ages


//

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));



// ...

// Function to add a colleague and set their extension number
function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
    const highestExtColleague = highestExtension(cs);

    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highestExtColleague.contact.extension + 1,
        },
    };

    cs.push(newColleague);
}

// Add a new colleague using the addColleague function
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");

// Filter and log the added colleague
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));





// ...
//
// function sortColleagues(
//     colleagues: Colleague[],
//     sorter: (c1: Colleague, c2: Colleague) => number
//   ): EmailContact[] {
//     const sorted = colleagues.sort(sorter); // Colleague[] inferred
//     const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
//     return result 
//   }
  
//   console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
//   console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));



  // find friends 


  function findFriends(friends: Friend[], criterion: (friend: Friend) => boolean): FriendInfo[] {
    const filteredFriends = friends.filter(criterion);
    const result: FriendInfo[] = filteredFriends.map((friend) => ({ name: friend.name, age: friend.age }));
    return result;
}

// Test the new function
console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));



//



function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max?: number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
      end = max < 2 ? 1 : max;
    }
    const sorted = colleagues.sort(sorter);
    const fullResult = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0, end);
  }
  
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension, 3));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length, 1));
  console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length)); // NEW