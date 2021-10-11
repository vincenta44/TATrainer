import { Button, Col } from 'react-bootstrap';
import { Card } from '../interfaces/card';
import CARDS from '../assets/cards.json'
import { getRandomElement, shuffle } from '../utilities/data';
import { UserList } from './UserList';
import { useState } from 'react';
import { Task } from 'editable-dnd-list';

export type User = Task;
export const LOCAL_STORAGE_USERS = "ta-trainer-users";
export const INITIAL_USERS: User[] = [
    {id: '1', text: "Vincent Ains"},
    {id: '2', text: "Monty"},
    {id: '3', text: "Ja-Ree-Ra"}
]

export function getLocalStorageUsers(): User[] {
    let rawUsers: string|null = localStorage.getItem(LOCAL_STORAGE_USERS);
    if(rawUsers === null){
        return [...INITIAL_USERS];
    } else{
        return JSON.parse(rawUsers);
    }
}

export function ControlPanel({setCard, reveal, answerRevealed, deck, showAddCardModal}: {setCard: (c: Card)=>void, reveal: (r: boolean) => void, answerRevealed: boolean, showAddCardModal: (b: boolean) => void, deck: Card[]}): JSX.Element {
    
    const [users, setUsers] = useState<User[]>(getLocalStorageUsers);
    
    
    function setRandomCard() {
        reveal(false);
        setCard(getRandomElement(deck))
    }

    function shuffleUsers() {
        let shuffledUsers: User[] = shuffle(users);
        setUsers([...shuffledUsers]);
        }

    function save(){
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(users))
    }

    function addNewCard(){
        showAddCardModal(true);
       /* const newCard: Card = {
            id: Math.random(),
            kind: "Custom",
            prompt: window.prompt("What do you want the prompt to be?") || "NO PROMPT",
            answer: window.prompt("What should the answer be?") || "NO ANSWER"
        };
        setDeck([...deck, newCard])*/
    }

    return <Col>
    <h1>Control Panel</h1>
    <UserList users={users} setUsers={setUsers}></UserList>
    <Button onClick={setRandomCard} className="m-4">Swap Current Card</Button>
    <Button onClick={()=>reveal(!answerRevealed)} className="m-4">Reveal Answer</Button>
    <Button onClick={shuffleUsers} className="m-4">Shuffle Users</Button>
    <Button onClick={save} className="m-4" variant="success">Save</Button>
    <Button onClick={addNewCard} className="m-4">Add New Card</Button>
    </Col>
}
