import React from 'react';

const LetterPage = ({ message }) => {
    const messages = {
        first: (
            <>
                <p>Hey Pretty Girl, 💖</p>
                <p>It’s been a tough road, hasn’t it? Navigating through school, deadlines, expectations—it’s not easy. Sometimes it feels like the pressure is never-ending, and yet, here you are, still standing. 🌿</p>
                <p>Academics can take so much out of you. The stress, the sleepless nights, the constant grind. But what’s remarkable is that, despite it all, you’ve managed to stay true to yourself. You’ve survived the challenges, and you’ve done it without losing sight of who you are or what you need. 🌷</p>
                <p>You’ve learned when to push and when to pause, when to focus on the grades and when to focus on your well-being. That balance is everything, and it’s a choice many forget to make. But not you. You’re still here, still growing, and still choosing yourself amidst the chaos. 🌸</p>
                <p>And that’s something to be incredibly proud of. No matter how tough things get, you’ve shown that you’re stronger. Keep going, and remember: you’ve survived the hard parts, and you’ll keep surviving—and thriving. 💫 <span className='font-primary text-white hover:text-black transition-all ease-in duration-75'>Mwah</span></p>
            </>
        ),
        second: (
            <>
                <p>Hey bipolar baby, 🌼</p>
                <p>You’ve been through so much, and despite it all, you’ve stayed strong. You’ve faced challenges, pushed through tough times, and kept moving forward when it seemed like everything was working against you. 🌿</p>
                <p>But I want you to know this: you deserve happiness. Not just the fleeting kind, but real, lasting joy. You’ve worked hard, not just in life or academics, but on yourself—and that deserves to be celebrated. 🌷</p>
                <p>There’s no doubt that happiness can sometimes feel out of reach, but it’s not something you need to earn. You’ve always been worthy of it, just by being who you are. It’s time to believe that for yourself. 🌟</p>
                <p>So, keep choosing yourself. Keep seeking the things that make you happy, the people who uplift you, and the moments that bring you peace. You deserve nothing less. 💖</p>
            </>
        ),
        third: (
            <>
                <p>Hey Tine, 💬</p> <p>I know you’re angry right now, and it’s okay. Sometimes life throws so much at you that it feels like you’re carrying more than you can handle. It’s frustrating, overwhelming, and it can feel like no one understands. 🔥</p> <p>Your feelings are valid. You don’t have to hide your anger or push it down. It’s a real emotion, and it’s there for a reason. Maybe it’s because you’ve been dealing with so much for too long. Maybe it’s because things aren’t fair. Whatever it is, you don’t need to apologize for it. 🌩️</p> <p>But remember this: even in your anger, don’t lose yourself. Take the time to feel what you need to feel, but also make sure to take care of yourself. Let it out in a way that heals you, not harms you. 🌱</p> <p>I’m here for you—through the good and the bad. You don’t have to go through this alone. When you’re ready, we’ll figure it out together. You’ve got this. 💖</p>
            </>
        ),
        fourth: (
            <>
               <p>Hey, 💬</p> <p>I know everything feels kind of… empty right now. You’re not really feeling anything, and it’s hard to care about things the way you usually do. Apathy can creep in like that, making everything seem dull and distant. 🌫️</p> <p>It’s okay to feel like this sometimes. Life can be overwhelming, and when you’ve been pushing yourself so hard for so long, it’s easy to feel disconnected. But don’t think this feeling defines you, because it doesn’t. It’s just where you are right now. 🌿</p> <p>Take this as a moment to breathe. Don’t force yourself to feel anything if you don’t. Rest. Reflect. And know that it’s okay to pause for a while. Eventually, the spark will come back, even if it feels like it’s far away right now. 🔄</p> <p>You’re not alone in this, and you don’t have to push yourself through it. Just take it one moment at a time. You’ll find your way back. 🌸</p>
            </>
        )
    };

    return (
        <div className="page-shadow h-full flex flex-col justify-center items-center p-10 font-sacramento text-2xl text-justify fade-in">
            <main>
                {messages[message]}
            </main>
        </div>
    );
};

export default LetterPage;
