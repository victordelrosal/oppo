import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Book, Target, Activity, Zap, LayoutList, Crosshair, ArrowRight } from 'lucide-react';

const Section = ({ title, children, defaultOpen = false, icon: Icon = Book }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-6 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
      style={{
        background: 'white',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0px)',
        boxShadow: isHovered 
          ? '0 10px 25px -5px rgba(59, 130, 246, 0.15), 0 5px 10px -5px rgba(59, 130, 246, 0.1)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-6 text-left flex items-center justify-between font-bold text-lg transition-all duration-300"
        style={{
          background: isOpen 
            ? 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)' 
            : isHovered 
              ? 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)' 
              : 'linear-gradient(135deg, #93c5fd 0%, #60a5fa 100%)',
          color: 'white',
          borderRadius: isOpen ? '8px 8px 0 0' : '8px'
        }}
      >
        <span className="flex items-center">
          <Icon size={22} className="mr-3" style={{ opacity: 0.9 }} />
          {title}
        </span>
        <div className="bg-white bg-opacity-20 p-1 rounded-full">
          {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '3000px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: `max-height ${isOpen ? '0.6s' : '0.3s'} ease-in-out, opacity 0.3s ease-in-out`
        }}
      >
        <div className="p-6 bg-white border-t border-blue-100">
          {children}
        </div>
      </div>
    </div>
  );
};

const Subsection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="mb-4 pl-3 border-l-3 transition-all duration-200"
      style={{
        borderImage: 'linear-gradient(to bottom, #3b82f6, #1e40af) 1',
        paddingLeft: '16px',
        transform: isHovered ? 'translateX(2px)' : 'translateX(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left my-2 flex items-center font-medium transition-all duration-200"
        style={{
          color: isHovered ? '#1d4ed8' : '#2563eb'
        }}
      >
        <div 
          className="mr-2 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: isHovered ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)',
            padding: '6px'
          }}
        >
          {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </div>
        <span className="text-md font-semibold">{title}</span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '1000px' : '0px',
          opacity: isOpen ? 1 : 0,
          transition: `max-height ${isOpen ? '0.4s' : '0.2s'} ease-in-out, opacity 0.3s ease-in-out`
        }}
      >
        <div className="pl-6 pr-2 py-2 text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

const Highlight = ({ children }) => {
  return (
    <span className="relative inline-block">
      <span className="relative z-10 font-medium text-blue-900">{children}</span>
      <span 
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-200 to-yellow-300 rounded z-0"
        style={{ opacity: 0.7 }}
      ></span>
    </span>
  );
};

const BulletPoint = ({ children }) => {
  return (
    <div className="flex items-start mb-4 group">
      <div className="h-6 w-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 mr-3 transition-all duration-200 group-hover:scale-110"
        style={{ 
          background: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)', 
          boxShadow: '0 2px 4px rgba(59, 130, 246, 0.3)'
        }}
      >
        <CheckCircle size={14} className="text-white" />
      </div>
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

const BaseballDiagram = () => {
  return (
    <div className="my-6 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 font-semibold">
        Opposite-Field Contact Point Diagram
      </div>
      <div className="bg-gradient-to-b from-blue-50 to-white p-6">
        <div className="flex justify-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-300 flex items-center justify-center shadow-lg"
                style={{ boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.1), 0 8px 24px rgba(234, 179, 8, 0.2)' }}>
              <div className="relative w-full h-full">
                {/* Baseball seams */}
                <div className="absolute w-full h-full rounded-full border-2 border-red-500"
                    style={{ 
                      borderStyle: 'dashed',
                      borderWidth: '2px',
                      borderRadius: '50%'
                    }}>
                </div>
                
                {/* Left side (black X for righty hitters) */}
                <div className="absolute left-12 top-1/2 transform -translate-y-1/2 font-bold text-4xl text-black"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>X</div>
                <div className="absolute left-6 top-1/3 text-lg font-bold text-gray-800">
                  Righty<br/>Hitters
                </div>
                
                {/* Right side (red X for lefty hitters) */}
                <div className="absolute right-12 top-1/2 transform -translate-y-1/2 font-bold text-4xl text-red-600"
                    style={{ textShadow: '1px 1px 2px rgba(220,38,38,0.3)' }}>X</div>
                <div className="absolute right-6 top-1/3 text-lg font-bold text-gray-800">
                  Lefty<br/>Hitters
                </div>
                
                {/* Bat handle at bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-24 rounded-b-lg"
                    style={{
                      background: 'linear-gradient(to right, #4b5563, #1f2937, #4b5563)',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
                    }}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-700 leading-relaxed px-6 max-w-2xl mx-auto">
          <strong className="text-blue-800">Visual Guide:</strong> To hit an outside pitch to the opposite field, aim to contact the inside half of the ball. 
          For a right-handed hitter, that means striking roughly the black "X" shown on the ball (left side of the diagram), 
          which directs the ball toward right field. Left-handed hitters do the opposite (red "X"). 
          Hitting the inner portion of the ball helps generate true opposite-field flight.
        </p>
      </div>
    </div>
  );
};

// Quick Navigation Component
const QuickNavItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 cursor-pointer group">
      <div className="p-2 rounded-lg mr-3 flex-shrink-0 bg-gradient-to-br from-blue-100 to-blue-200 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-200">
        <Icon size={18} className="text-blue-700" />
      </div>
      <div>
        <h4 className="font-medium text-blue-800 mb-1">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Hero Header */}
        <div className="relative mb-10 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600 opacity-90"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('https://img.freepik.com/free-photo/baseball-player-action_23-2150535064.jpg')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            mixBlendMode: 'overlay',
            opacity: 0.3
          }}></div>
          
          <div className="relative px-8 py-12 text-center sm:py-16">
            <h1 className="text-4xl font-extrabold text-white mb-3 tracking-tight sm:text-5xl">
              Mastering Opposite-Field Hitting
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 mx-auto my-5 rounded-full"></div>
            <h2 className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Mechanics and Drills for Right-Handed Hitters
            </h2>
            <p className="text-blue-100 italic max-w-2xl mx-auto">
              A comprehensive guide to developing consistent opposite-field hitting ability for competitive baseball and softball players.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-semibold text-sm shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px]">
                <ArrowRight size={16} className="mr-2" /> Expand all sections below to learn more
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents - Quick Navigation */}
        <div className="mb-10 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
          <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
            <LayoutList size={18} className="mr-2" /> Quick Navigation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <QuickNavItem icon={Book} title="Introduction" description="Why opposite-field hitting matters" />
            <QuickNavItem icon={Zap} title="Swing Mechanics" description="Core technique adjustments" />
            <QuickNavItem icon={Activity} title="Stance & Positioning" description="Body positioning for success" />
            <QuickNavItem icon={Crosshair} title="Timing & Recognition" description="Recognizing and hitting outside pitches" />
            <QuickNavItem icon={Target} title="Drills" description="7 practice drills for muscle memory" />
            <QuickNavItem icon={Activity} title="Baseball vs. Softball" description="Sport-specific considerations" />
          </div>
        </div>

        <Section title="Introduction" icon={Book} defaultOpen={true}>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Hitting consistent line drives to the opposite field is a hallmark of advanced hitters. It forces defenses to
            play you honestly and allows you to handle outside pitches with authority. Even elite players thrive with
            this skill – for example, Miguel Cabrera has a remarkable career batting average of .373 when hitting to the
            opposite field.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Developing this ability as a competitive (but non-professional) player will make you more well-rounded at the 
            plate and tough to pitch against. This guide breaks down the key mechanics, approach, and drills to help a 
            right-handed baseball or softball player drive the ball to right field consistently.
          </p>
          
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-800 font-medium">
              <span className="text-blue-600 font-bold">Pro Insight:</span> Even the game's best hitters like Miguel Cabrera (.373 average on opposite-field hits) deliberately practice this skill to stay well-rounded at the plate.
            </p>
          </div>
        </Section>

        <Section title="Swing Mechanics for Opposite-Field Line Drives" icon={Zap}>
          <p className="mb-5 text-gray-700 leading-relaxed">
            To drive the ball to the opposite field, your swing must adjust for a slightly <Highlight>later contact point</Highlight> (letting
            the ball travel deeper in the zone) while still being powerful and aggressive. The goal is not to "poke" the
            ball weakly, but to <Highlight>drive it hard</Highlight> on a line into right or right-center field.
          </p>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Key mechanical concepts include staying "inside" the ball, maintaining good posture, and avoiding over-rotation. 
            Here are the fundamental adjustments to make in your swing:
          </p>

          <Subsection title="Let the Ball Get Deep">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Allow the pitch to travel closer to your body before initiating contact. Hitting the ball later (deeper in the 
              strike zone) is crucial for opposite-field hits. This may feel "late" at first, but it enables you to drive outside 
              pitches instead of rolling over them.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Major leaguers often foul pitches to the opposite side "by design" because they deliberately wait longer on 
              outside pitches.
            </p>
          </Subsection>

          <Subsection title="Hands Inside the Ball">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Keep your hands close to your body during the swing, so the bat takes a direct inside path to the ball. This inside-out 
              swing prevents you from casting your arms out or hooking around the ball.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              It's how players like Derek Jeter could hit even inside pitches to right field – by pulling his hands inside the ball 
              and not extending early.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Staying inside the ball leads to solid contact on the ball's inner half and reduces weak flares or rollovers.
            </p>
          </Subsection>

          <Subsection title="Stay Closed and Don't Over-Rotate">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Resist the urge to open your front side too early. Keep your front shoulder and chest pointed at the pitcher 
              (or even slightly toward right-center) up until contact.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Over-rotating (twisting your chest toward left field too soon) pulls your hands away from the outside pitch and 
              results in weak contact or missing it.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Instead, direct your rotation toward the opposite field and decelerate your hip turn slightly sooner on outside pitches. 
              This means your body rotates just enough to drive the ball, but you don't spin off the pitch.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Your follow-through should naturally extend toward right field, indicating you stayed through the ball.
            </p>
          </Subsection>

          <Subsection title="Maintain Good Posture and Balance">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Stay tall and keep your head and upper body from drifting over the plate. Leaning or lunging forward will only 
              make you off-balance and reduce power on an outside pitch.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Instead, think of your body as a center rotating in place: a slight inward tilt is okay, but keep your spine 
              relatively upright ("stay tall") and your weight between your feet as you swing. Good posture allows a powerful 
              rotation and keeps your bat in the zone longer.
            </p>
          </Subsection>

          <Subsection title="Strong, Level-to-Up Bat Path">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Use a slight upward swing path through the ball, which is consistent for both baseball and fastpitch softball hitters. 
              This helps you drive the ball in the air rather than chopping it.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Avoid the urge to "chop down" or stab at an outside pitch – that often leads to weak grounders. Instead, swing 
              through it on a line into the opposite field.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you let the ball travel and rotate properly (instead of lunging), you'll actually increase your bat speed 
              into contact. This means you can hit oppo line drives with authority and even achieve opposite-field power with 
              practice (many pro hitters note that when they stay back, their exit velocity and power to the opposite field improve).
            </p>
          </Subsection>

          <BaseballDiagram />

          <div className="mt-6 p-6 bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <Zap size={20} className="mr-2" /> Key Technique Summary
            </h3>
            <p className="mb-3">
              <Highlight>Let the ball get deep, keep your front side closed, and drive through the ball toward right field 
              with an inside-out swing</Highlight>. A coach's cue that encapsulates this is "let it get back, and attack" – wait for the 
              ball to reach your optimal contact point, then take your normal aggressive swing through it.
            </p>
            <p>
              Avoid "guiding" the ball with your arms; trust your mechanics and swing hard. By staying disciplined with these 
              mechanics, you'll make solid opposite-field contact rather than weak flares. And remember, power the other way is 
              possible – it comes from good mechanics and timing, not muscling the ball. (Even power hitters like Albert Pujols 
              spend spring training working on going oppo and "not pulling the ball" to hone this skill.)
            </p>
          </div>
        </Section>

        <Section title="Stance, Body Positioning, and Weight Transfer" icon={Activity}>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Your stance and body positioning set the foundation for successful opposite-field hitting. As a right-handed batter, 
            you don't need an extreme stance change to hit to right field, but there are a few considerations to help your body 
            be in the right position at contact:
          </p>

          <Subsection title="Plate Coverage and Stance">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Make sure you stand at a distance from the plate that allows you to comfortably reach the outer third with your bat. 
              Many hitters stand at a normal depth in the box for all pitches, but if you struggle to reach outside pitches, adjust 
              your position (slightly closer to the plate) to cover that outside corner.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Generally, use your standard stance – roughly shoulder-width base, slight knee bend, and balanced weight distribution – 
              so that you can drive the ball the other way <Highlight>without lunging</Highlight>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Avoid stepping toward the pitch; you should stride straight ahead (or even slightly toward the pitcher) the same way 
              every time. Striding directly forward keeps you from "diving" over the plate or prematurely shifting your weight. 
              Trying to step at an outside pitch with your lead foot will throw off your alignment and balance. Instead, stride 
              normally and let your upper body adjust by staying closed and driving the ball to right field.
            </p>
          </Subsection>

          <Subsection title="Body and Chest Orientation">
            <p className="mb-4 text-gray-700 leading-relaxed">
              As you load and stride, keep your <Highlight>front shoulder closed</Highlight> (pointed toward the pitcher or slightly toward 
              right-center field). This means your chest stays facing the plate/outside part of the plate even as you begin your swing.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              By doing so, you delay opening up. Your hips will still fire to generate power, but your torso stays disciplined, 
              allowing the bat to stay on an outside path. Think of <Highlight>"keeping your chest on the ball."</Highlight> This cue reminds you 
              not to pull off with your upper body.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your chest and shoulders fly open toward left field, your swing will cut across the ball and you'll either whiff 
              or hit weak grounders on outside pitches. Instead, <Highlight>finish your swing with your chest facing opposite field</Highlight> – 
              this ensures you stayed on the ball through contact.
            </p>
          </Subsection>

          <Subsection title="Head and Eye Position">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Keep your head still and eyes level on the pitch. Since the outside pitch is farther from your eyes, you may need 
              extra focus to track it (it's harder to judge a pitch on the outer edge than one down the middle).
            </p>
            <p className="text-gray-700 leading-relaxed">
              Turn your head enough to see the ball deep into the zone. A good habit is to try to see the ball hit your bat, which 
              forces you to hold your posture and not pull your head off the ball. Staying back and not lunging will also keep your 
              head from moving too much forward, which is critical for vision.
            </p>
          </Subsection>

          <Subsection title="Weight Transfer">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Proper weight transfer is vital for any good swing. For opposite-field hitting, emphasize a <Highlight>controlled transfer 
              from your back foot to front foot</Highlight>. Start with a balanced stance (slight weight on the balls of your feet).
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              As the pitch comes, stride and transfer weight onto your front leg <Highlight>without drifting</Highlight> your upper body forward. 
              You want to be "against" your front leg at contact, not falling over it.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A common mistake is lunging at outside pitches – this causes you to hit the ball too far out front or lose power. 
              Instead, stay back a split-second longer. Feel your front leg firm up as you rotate, with your weight shifting into 
              that leg after contact.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In other words, <Highlight>don't rush your weight shift</Highlight>. If you transfer too early, you'll have nothing left at 
              contact except your arms. One coach advises hitters to "stay closed on the front side for just a tick longer, then 
              explode into the pitch", especially in a batting cage drill for oppo hitting. This means you keep your front hip from 
              flying open and keep your weight back just a hair longer, then drive your hips and hands through once the ball is in 
              the proper range. When done right, you'll feel a powerful rotation without falling over the plate.
            </p>
          </Subsection>

          <Subsection title="Balance and Posture Through the Swing">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Even after contact, your body position can tell you if you did it right. Ideally, you finish in a balanced stance, 
              not lunging forward or off-balance toward third base.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you were "tall" and didn't lean out, you should be able to hold your finish briefly. Good opposite-field hitters 
              often finish with their front shoulder slightly lower than the back shoulder (from the level swing), eyes still on the 
              contact point, and their weight mostly on the front leg but body upright. If you find yourself stumbling forward, focus 
              on keeping more weight back during the swing and strengthening your core to hold posture.
            </p>
          </Subsection>

          <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                <Book size={18} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-blue-800 font-semibold mb-2">Training Note</h4>
                <p className="text-gray-700 text-sm">
                  Some hitters slightly adjust their stance in practice to help learn opposite-field hitting. 
                  For example, one drill is to use an open stance (front foot open 45°) and try to hit the ball oppo from that position. 
                  This drill exaggerates the feeling of keeping your swing "away from your body and not around it", teaching you to drive 
                  the ball the other way even when your stance is open. However, in games you'll likely use your normal stance – these 
                  adjustments are mostly for practice to reinforce staying inside the ball.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Timing and Pitch Recognition" icon={Crosshair}>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Timing is closely tied to the mechanics above: you must be <Highlight>patient</Highlight> enough to let the ball come to you. 
            For a righty aiming for right field, that usually means hitting the ball when it's just past your front hip 
            (rather than out in front of the plate). The mantra "be patient and let the ball travel" is repeated by 
            coaches for a reason. Here's how to improve your timing and pitch recognition for opposite-field hitting:
          </p>

          <Subsection title='"Slow Down" Your Timing'>
            <p className="mb-4 text-gray-700 leading-relaxed">
              If you're used to pulling everything, you likely start your swing a hair too early for outside pitches. Train yourself 
              to wait an extra fraction of a second. It can help to think "right field" as your default approach, especially early 
              in counts or against slower pitching.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As one coach puts it, <Highlight>expect everything outside until proven otherwise</Highlight>, and adjust if you get an inside pitch. 
              By expecting an outer-half pitch, you'll naturally let the ball get deeper. This doesn't mean you won't be able to hit 
              an inside pitch – your reflexes will take over on inside ones (you'll simply pull them). But by gearing slightly later, 
              you won't be fooled by that tailing outside fastball or slider. You'll find you can still turn on the inside pitch when 
              needed, but you'll stop jumping out in front of outside/off-speed pitches.
            </p>
          </Subsection>

          <Subsection title="Better Pitch Recognition">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Recognizing an outside pitch early out of the pitcher's hand is key. Since an outside pitch is farther from your eyes, 
              it's challenging to tell a strike from a ball on the edge.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Work on tracking the ball from release point all the way in. A helpful exercise is to have a teammate or coach mix 
              locations during batting practice while you call out "inside" or "outside" as soon as you recognize it. This trains your 
              visual pick-up.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Another tip: Focus on the pitcher's grip or the seam rotation (for baseball, see the red laces; for softball, watch the 
              rotation) to help distinguish pitch types that might break away from you. The more you practice recognizing that outside 
              pitch early, the more confidently you can wait for it.
            </p>
          </Subsection>

          <Subsection title="Stay Back on Off-Speed">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Hitting to the opposite field often means you're automatically better at handling off-speed pitches. By waiting longer, 
              you give yourself a chance to see a change-up or drop/rise (in softball) a bit longer.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Trust what your eyes see – if the pitch is an off-speed drifting outside, don't panic. Keep your weight back and drive 
              it to right. Being able to go oppo on off-speed is a huge asset (you'll get lots of RBI hits on outside change-ups if you 
              stay through them).
            </p>
            <p className="text-gray-700 leading-relaxed">
              One mental trick is to <Highlight>think "hit it late"</Highlight> – this removes the rush feeling. You can even foul off tough outside 
              pitches intentionally (as many pros do) to stay alive until you get one you can square up – that's better than rolling over weakly.
            </p>
          </Subsection>

          <Subsection title="Approach and Count Strategy">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Early in the count or when you're looking to make solid contact (not just pull a homer), look for a pitch on the outer 
              half that you can drive to the gap. Many advanced hitters use an opposite-field approach until they have two strikes or 
              unless a pitcher comes inside.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              This is because going oppo naturally keeps you on the ball longer, which <Highlight>reduces strikeouts</Highlight> and "getting fooled". 
              You'll also tend to hit more balls fair by staying back.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you get ahead in the count (e.g. 2-0, 3-1) and you anticipate an inside pitch you can pull, you can adjust your approach 
              for that pitch. But with two strikes, a smart strategy is often to <Highlight>think up the middle or opposite field</Highlight>, which keeps 
              you on the pitch longer and helps you fight off tough outside corners.
            </p>
          </Subsection>

          <Subsection title="Mindset">
            <p className="mb-4 text-gray-700 leading-relaxed">
              Embrace the mindset that you <Highlight>can and will drive the ball the other way</Highlight>. Sometimes hitters have a mental block – 
              as seen in young players who "don't feel comfortable" hitting outside and let those pitches go.
            </p>
            <p className="mb-4 text-gray-700 leading-relaxed">
              Overcome this by dedicating practice to opposite-field hitting and carrying that confidence into games. A great way to 
              reinforce the mindset is a practice challenge: in a controlled scrimmage or friendly game, plan to only swing at outside 
              pitches and hit them to right field.
            </p>
            <p className="text-gray-700 leading-relaxed">
              One coach suggests telling a hitter in a scrimmage to ignore any pitch that isn't outside until they get to two strikes, 
              forcing them to attack the opposite-field pitch when it comes. This kind of challenge trains your patience and commitment. 
              By doing this, you'll gradually remove the fear of the outside pitch and start seeing it as an opportunity to drive the ball.
            </p>
          </Subsection>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-xl border border-yellow-200 shadow-sm">
              <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                <Activity size={18} className="mr-2" /> Game Situation Awareness
              </h4>
              <p className="text-gray-700 text-sm">
                Recognize when opposite-field hitting is especially useful. If a pitcher is living on the outside 
                corner, or if the game situation calls for hitting behind a runner (e.g., a runner on second with no outs), 
                <Highlight> adjust your mindset to go with the pitch</Highlight>.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200 shadow-sm">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <Target size={18} className="mr-2" /> Strategic Advantage
              </h4>
              <p className="text-gray-700 text-sm">
                Opposite-field line drives are great for defeating shifts or outfield positioning that cheats toward left. 
                Being able to execute this on command is a huge asset for any competitive hitter and makes you much harder to defend against.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Drills to Build Opposite-Field Muscle Memory" icon={Target}>
          <p className="mb-5 text-gray-700 leading-relaxed">
            Practicing opposite-field hitting through specific drills will reinforce the mechanics and timing until it becomes second nature. 
            Both baseball and fastpitch softball players can use these drills (with only minor modifications for each sport). Prioritize
            <Highlight> quality reps</Highlight> – focus on form and a strong, correct contact point, rather than just volume. Here are some effective drills:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
                <h3 className="text-white font-bold flex items-center text-lg">
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">1</div>
                  Outside Tee Drill
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-gray-700 leading-relaxed">
                  Set up a batting tee on the <strong>outer third of home plate</strong> and slightly deeper (closer to the catcher) than you would for a middle pitch. 
                  Practice hitting line drives toward right-center field.
                </p>
                <p className="font-medium text-blue-800 mb-2">Focus:</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Keep your hands tight to the body and "inside" the ball, driving the ball where it's pitched. This drill lets you 
                  concentrate on mechanics (stance, swing path) in a controlled way.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-blue-700">Pro Tip:</span> If you have a tendency to hook the ball, place a second tee (with no ball) 
                    slightly in front of the plate on the inner half – this becomes an obstacle you must avoid hitting, teaching you to take an 
                    inside-out path to the outside pitch.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
                <h3 className="text-white font-bold flex items-center text-lg">
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">2</div>
                  Front Toss or Side Toss
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-gray-700 leading-relaxed">
                  Have a coach or partner do front toss from in front of you (or soft toss from the side) focusing on pitching the ball to the 
                  <strong> outside part of the plate</strong>.
                </p>
                <p className="font-medium text-blue-800 mb-2">Focus:</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Track the moving ball, <strong>stay back</strong> and drive it where it's pitched – do not yank these tosses to the pull side.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-blue-700">Advanced Variation:</span> Try the "dummy toss" drill: occasionally, the tosser fakes a toss (no ball), 
                    and you must hit a ball placed on an outside tee instead. This ensures you're keeping the same approach for both live and stationary pitches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
                <h3 className="text-white font-bold flex items-center text-lg">
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">3</div>
                  Opposite-Field Batting Practice
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-gray-700 leading-relaxed">
                  During regular batting practice or cage work, dedicate rounds <strong>exclusively to opposite-field hitting</strong>. Communicate with your 
                  BP pitcher: have them throw a series of outside strikes, and make it a rule that you aim every hit to the opposite field.
                </p>
                <p className="font-medium text-blue-800 mb-2">Focus:</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Use your normal swing but with the mental image of driving everything from center to right. This helps blend your 
                  adjustments into a realistic setting.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-blue-700">Setup Idea:</span> In a cage, shift the home plate a few inches toward the batter's 
                    side (closer to you) – this makes every pitch effectively feel further outside, forcing you into an oppo approach.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
                <h3 className="text-white font-bold flex items-center text-lg">
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">4</div>
                  "Opposite Field Only" Game
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-gray-700 leading-relaxed">
                  This is a fun drill that can be done with a partner or team. Play a mini-game where <strong>only opposite-field hits count</strong>. 
                  For example, split into groups and have a contest: each hitter gets 5 swings; any ball hit to the opposite field gap or 
                  line is a point, anything else is 0 (or an out).
                </p>
                <p className="font-medium text-blue-800 mb-2">Benefits:</p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  This kind of game forces you to commit to the approach. It also simulates game pressure because you're trying to "win" the drill.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-blue-700">Coach's Note:</span> When players know only oppo hits count, they naturally adjust – 
                    they wait longer and use the whole field. It's a great way to shift focus from theory to performance under a bit of pressure.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
                <h3 className="text-white font-bold flex items-center text-lg">
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">5</div>
                  Open Stance Drill
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-gray-700 leading-relaxed">
                  Try taking some swings with an exaggerated <strong>open stance</strong> (front foot opened up about 45 degrees toward third base) and still 
                  hit the ball to right field.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This drill feels odd, but it teaches you to swing "away from your body" rather than pulling around. Because your stance is 
                  open, you must keep your hands in and really push the ball to the opposite field.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
                <h3 className="text-white font-bold flex items-center text-lg">
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">6</div>
                  Two-Plate Drill
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-gray-700 leading-relaxed">
                  Place two home plates in the batter's box – one in the normal spot, and a second one a foot or two behind it 
                  (toward the catcher). Try hitting from the <strong>back plate</strong> to simulate an outside pitch that you must let travel.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This extra distance forces you to let the ball get deeper before you can hit it. If you hit from the back plate and still 
                  pull the ball, you know you're swinging too early.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-3">
                <h3 className="text-white font-bold flex items-center text-lg">
                  <div className="bg-white w-7 h-7 rounded-full flex items-center justify-center mr-3 text-blue-600 font-bold">7</div>
                  Visualization Drills
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-gray-700 leading-relaxed">
                  Stand in the batter's box during a live bullpen (no swing, just watch) and practice
                  <strong> identifying outside pitches</strong>. Track the pitch and imagine how you'd drive it to right.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Additionally, use visualization: before at-bats, close your eyes and <strong>visualize a hard line drive</strong> over 
                  the first baseman's head or into the right-center gap.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-xl border border-blue-100 shadow-md mt-8">
            <h3 className="text-blue-800 font-bold mb-4 flex items-center">
              <Target size={20} className="mr-2" /> Consistency Tips for Success
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <BulletPoint>
                Make these drills a <strong>regular part of your training routine</strong>. Muscle memory builds with repetition – hundreds of swings where 
                you do it right. One forum coach suggested around 1,500–2,000 reps focused on away pitches over a few weeks to really 
                engrain the habit.
              </BulletPoint>
              
              <BulletPoint>
                <strong>Use feedback</strong>: If possible, have someone watch your swings or record video. Key things to check: Are you staying closed 
                (front shoulder in) until late? Is your contact point near your front hip (deeper in zone)? Is your bat path going through 
                the ball toward right field (as opposed to cutting across)?
              </BulletPoint>
              
              <BulletPoint>
                <strong>Incorporate oppo-hitting into BP rounds</strong> and scrimmages frequently, not just isolated drills. A great practice approach 
                is to start every batting practice round with a few opposite-field focused swings before you start ripping pull-side. This 
                sets your timing and reinforces staying on the ball.
              </BulletPoint>
              
              <BulletPoint>
                Many hitters find that after working on oppo, their <strong>overall hitting improves</strong> – they strike out less and can still handle 
                inside pitches when needed. You're training yourself to see the ball longer, which has benefits across all aspects of 
                your hitting approach.
              </BulletPoint>
            </div>
          </div>
        </Section>

        <Section title="Baseball vs. Softball – Any Differences in Opposite-Field Hitting?" icon={Book}>
          <p className="mb-5 text-gray-700 leading-relaxed">
            The <strong>good news</strong> is that the core principles of opposite-field hitting apply equally to baseball and fastpitch softball. 
            A fundamentally sound swing is effective in both sports, and the idea of letting the ball travel deeper and driving it to 
            the right side is the same. There are, however, a few contextual differences to be aware of:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 px-5 py-3">
                <h3 className="text-white font-bold text-lg">Pitch Trajectory</h3>
              </div>
              <div className="p-5">
                <p className="mb-4 text-gray-700 leading-relaxed">
                  In baseball, pitches arrive on a mostly downward plane (overhand delivery), whereas in softball (underhand fastpitch) 
                  the ball can come in flat or even with a slight upward rise.
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Despite this, you do <strong>not</strong> need a radically different swing for softball. Both baseball and softball hitters benefit from a 
                  slight uppercut swing (~20° swing plane) for line drives. So whether the ball is coming down or up, you still want to 
                  meet it with a solid, slightly upward stroke.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The main adjustment is tracking the pitch: a rise ball in softball can be tempting to swing at but often is a "sucker pitch" – 
                  the best hitters simply lay off it (similar to laying off a sweeping curveball or slider off the plate in baseball).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 px-5 py-3">
                <h3 className="text-white font-bold text-lg">Reaction Time</h3>
              </div>
              <div className="p-5">
                <p className="mb-4 text-gray-700 leading-relaxed">
                  The distance from pitcher's rubber to home plate is shorter in softball (43 feet in women's fastpitch) than in baseball (60'6"). 
                  A 65 mph softball pitch from 43 ft reaches the batter about as fast as a 90+ mph baseball pitch!
                </p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  This means softball hitters actually have <strong>less time</strong> to decide, making efficient mechanics even more crucial. Fortunately, 
                  an opposite-field approach encourages letting the ball travel, which inherently gives you a split-second longer to decide.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In both sports, being slightly "late" (letting it get deep) is better than being early. So softball hitters, just like baseball 
                  hitters, should trust that they can wait and still get the bat there – the key is keeping that high bat speed and quick rotation 
                  (which you train with the drills above) to make up for the reaction time.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 px-5 py-3">
                <h3 className="text-white font-bold text-lg">Equipment and Field Size</h3>
              </div>
              <div className="p-5">
                <p className="mb-4 text-gray-700 leading-relaxed">
                  A softball is larger and a bit heavier than a baseball, and softball bats differ in weight distribution. However, these 
                  factors don't change the approach – they just mean when you square up a ball to the opposite field in softball, it might 
                  not travel quite as far as a baseball might (due to physics).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  That said, softball fields are smaller, so you can absolutely still hit gappers or even home runs oppo with a good swing. 
                  Don't fall into the trap of thinking you must muscle the ball because of the larger ball – stay with your mechanics. 
                  In both sports, a squared-up line drive easily clears the infield and finds gaps.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-200">
              <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 px-5 py-3">
                <h3 className="text-white font-bold text-lg">Mental Adjustments</h3>
              </div>
              <div className="p-5">
                <p className="mb-4 text-gray-700 leading-relaxed">
                  One difference might be in how pitchers attack you. In baseball, a right-handed pitcher's slider away or a sinker running 
                  outside might be the pitch you take oppo. In softball, you might see a curveball (breaking away from a righty batter) or a 
                  low outside drop ball.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Recognize the patterns: softball pitchers might try to get you fishing at a rise ball up and away – discipline is key 
                  (don't chase high, focus on strikes you can drive). Baseball pitchers might nibble outside hoping you roll over – prove to 
                  them you won't; you'll take that pitch to right for a single.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-6 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-xl shadow-lg text-white">
            <h3 className="font-bold text-lg mb-3">Key Takeaway for Both Sports</h3>
            <p className="mb-4">
              In summary, there's no major difference in the swing itself for opposite-field hitting between baseball and softball – a strong, 
              fundamentally correct swing works in both arenas. Both require letting the ball travel, quick hands, and proper rotation. The 
              differences lie in pitch types and timing, but as long as you train yourself to stay back and drive the ball where it's pitched, 
              you'll excel in either sport.
            </p>
            <p className="font-medium">
              As one coach succinctly put it, <Highlight>"Good posture, high bat speed, and letting the ball get deep"</Highlight> are the keys to opposite-field 
              power – wisdom that holds true whether you're swinging a baseball bat or a softball bat.
            </p>
          </div>
        </Section>

        <Section title="Conclusion" icon={CheckCircle}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-md md:col-span-2">
              <h3 className="text-blue-800 font-bold mb-3 text-lg">The Complete Hitter's Advantage</h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                By following these mechanics adjustments, honing your timing, and drilling deliberately, a right-handed hitter can develop a 
                reliable opposite-field stroke. The process may feel challenging at first (old habits like pulling off the ball are hard to break), 
                but stick with it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The payoff is a hitter who can lace an outside fastball into right-center for a clutch RBI, rather than feeling handcuffed by 
                anything not down the middle. Coaches at high levels notice this skill – being able to "drive the other way with pop" will make 
                you stand out. Stay patient, trust your training, and soon you'll find that going oppo becomes as natural as pulling the ball – 
                giving you the complete plate coverage that top hitters possess.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-5 rounded-xl shadow-md text-white h-full flex flex-col justify-center">
              <h3 className="font-bold mb-3 text-lg flex items-center">
                <CheckCircle size={20} className="mr-2" /> Keys to Success
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-2 mt-1">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span>Let the ball travel deeper</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-2 mt-1">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span>Keep hands inside the ball</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-2 mt-1">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span>Stay closed with front shoulder</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-2 mt-1">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span>Maintain good posture & balance</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-white rounded-full p-1 mr-2 mt-1">
                    <CheckCircle size={12} className="text-blue-600" />
                  </div>
                  <span>Practice with quality, not just quantity</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
            <div className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                <Book size={18} className="text-blue-600" />
              </div>
              <div>
                <h4 className="text-blue-800 font-semibold mb-2">Source Notes</h4>
                <p className="text-gray-700 text-sm">
                  High-level coaching insights and drills were gathered from experienced coaches and players in both baseball and softball, 
                  including professional instructors. Key references include analyses of successful opposite-field hitters like Miguel Cabrera 
                  and Derek Jeter, softball coaching articles on outside pitch hitting drills, and community discussions among coaches. These 
                  sources emphasize the same core principles of letting the ball travel deep, keeping the swing mechanics sound, and practicing 
                  with purpose – the foundation of this practical guide.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-blue-900 font-bold text-lg mb-2">Good luck, and happy hitting!</p>
            <div className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold text-sm shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 hover:translate-y-[-2px] group">
              <span className="mr-2">Return to the top</span> 
              <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default App;