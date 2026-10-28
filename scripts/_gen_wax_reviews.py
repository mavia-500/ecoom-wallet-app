"""Generate 150 lazy-loaded reviews for Wax Pull Up Leather Wallet."""
from datetime import date, timedelta
from pathlib import Path

# 150 unique-looking Pakistani-style usernames
first = [
    "Adeel", "Hira", "Farooq", "Sana", "Umer", "Maham", "Raza", "Kinza",
    "Shahid", "Areeba", "Danish", "Lubna", "Saad", "Nida", "Haris", "Mehreen",
    "Yasir", "Anum", "Fawad", "Iqra", "Kamran", "Sumbul", "Arham", "Zara",
    "Taha", "Bushra", "Owais", "Laiba", "Junaid", "Hammad", "Noor", "Asim",
    "Hiba", "Salman", "Mahnoor", "Usama", "Ayesha", "Noman", "Kiran", "Dua",
    "Wajahat", "Eman", "Hamza", "Saba", "Rohail", "Minahil", "Zohaib", "Hoorain",
    "Talha", "Aiman", "Usman", "Sundas", "Arsalan", "Neha", "Rimsha", "Shoaib",
    "Areej", "Kashan", "Maha", "Irticaza", "Hafsa", "Bilal", "Zunaira", "Omer",
    "Anaya", "Shahbaz", "Faheem", "Abdullah", "Hassan", "Alishba", "Muneeb",
    "Saifullah", "Taimoor", "Nimra", "Asad", "Eshaal", "Haroon", "Nouman",
    "Rameel", "Sidra", "Jawad", "Sameer", "Fizza", "Ahmer", "Shaheer", "Hania",
    "Waqas", "Ibrahim", "Maryam", "Fahad", "Komal", "Rehan", "Saima", "Basit",
    "Tehmena", "Amber", "Atif", "Rabia", "Shahzad", "Uzma", "Javed", "Aamir",
    "Sohail", "Fariha", "Zeshan", "Muneeba", "Adnan", "Owais", "Haider", "Faizan",
    "Nida", "Khalid", "Shaista", "Tanveer", "Sobia", "Zeeshan", "Bushra",
    "Maleeha", "Saqib", "Nasreen", "Wahab", "Shireen", "Parveen", "Manzoor",
    "Ijaz", "Nazia", "Akram", "Mustafa", "Saima", "Zubair", "Hamid", "Waleed",
    "Rehan", "Danish", "Mehwish", "Taimur", "Sadaf", "Farhan", "Shahzad",
    "Moiz", "Adnan", "Mariyam", "Samina", "Faizan", "Rafi", "Ali", "Hamza",
    "Abeer", "Gulzar", "Imran", "Nadia", "Tariq", "Zainab", "Omar", "Fatima",
    "Hassan", "Sara", "Ahmed", "Mariam", "Bilal", "Ayesha",
]
suffixes = [
    "", ".R", ".K", ".Lhr", ".Khi", ".Isb", ".Rwp", ".Fsd", ".Mlt", ".Bwp",
    ".Guj", " Ali", " Khan", " Ahmed", " Malik", " Sheikh", " Butt", " Qureshi",
    " Nawaz", " Tariq", " Raza", " Iqbal", " Saeed", " Anwar", " Shah",
]
names = []
seen = set()
i = 0
while len(names) < 150:
    base = first[i % len(first)]
    suf = suffixes[(i * 7) % len(suffixes)]
    # vary formatting
    if i % 11 == 0 and not suf.startswith("."):
        name = f"{base}_{suf.strip()}" if suf.strip() else f"{base}{i%97}"
    elif i % 5 == 0:
        name = f"{base[0]}.{base}" if len(base) > 2 else f"{base}{i}"
    else:
        name = f"{base}{suf}" if suf else f"{base}{i%50}"
    name = name.replace("  ", " ").strip("._ ")
    if not name or name in seen or len(name) < 3:
        name = f"{base}{i}"
    if name not in seen:
        seen.add(name)
        names.append(name)
    i += 1

comments_templates = [
    "Wax pull-up looks even better in person. The light streaks are real leather, not printed.",
    "Six card slots plus the hidden ones are enough for my daily carry. Cash side is one compartment, perfect.",
    "Bought on COD to Lahore. Arrived in three days. Stitching is thick and even.",
    "Slimmer than my old bifold. Pocket does not bulge after a full day.",
    "Cream stitching pops nicely against the brown. Photos did not exaggerate the texture.",
    "Hidden slots are useful for my CNIC and a spare card. Main slots hold bank cards firm.",
    "No cloth lining — just leather. That is what I wanted. Feels denser than cheap wallets.",
    "Gifted to my brother. He switched from a branded one within a week.",
    "Slightly stiff on day one. Softened after a few days of use. Normal for wax pull-up.",
    "Cash compartment holds folded notes without fighting the cards. Clean layout.",
    "Video matched the piece I received. Colour and pull-up marks look the same.",
    "Edges are burnished properly. No raw fluff. You can tell it is hand finished.",
    "I keep four cards in front slots and two in hidden. Room left if needed.",
    "Karachi delivery was quick. Packaging simple, leather itself feels premium.",
    "Darker brown indoors, lighter pull-up in sunlight. Looks alive, not flat.",
    "Hand stitching on the perimeter is neat. No loose threads out of the box.",
    "Office and weekend use. Still looks new after three weeks.",
    "Wife ordered after I complained about a fat wallet. This is my daily now.",
    "Islamabad summer — leather did not get sticky. Still matte and dry.",
    "Price felt fair for genuine wax pull-up. Better than the market copies I tried.",
    "Second Hilyah piece. Same honest leather feel as the card holder I bought.",
    "Wish it had a coin pocket, but I do not carry coins. One cash sleeve is fine.",
    "Corners already picking a little character. That is pull-up leather doing its job.",
    "Listing photos are accurate. No surprise colour mismatch.",
    "Snap-free bifold — opens flat. Easy to grab cards without a fight.",
    "Checked on COD, kept it. Stitching and leather both solid.",
    "Flap-free design I wanted. Just open and go. Good everyday bifold.",
    "Clean face, no big logo. Quiet premium look.",
    "Motorcycle commute daily. Cards stay put, cash does not fall out.",
    "Beats the imported wallet that started peeling. This feels built to age.",
    "Took it to a wedding in a jacket pocket. Thin enough not to ruin the line.",
    "Slots still grip after a month of pulling cards out at work.",
    "Brown goes with both jeans and formal trousers. Versatile colour.",
    "Arrived a day late but quality made up for it. No complaints on the piece.",
    "Front slots for ATM and debit. Hidden for licence. Simple system.",
    "Dry waxed feel, not oily. Prefer that. Ages slower too.",
    "Ordered one for Abbu as well. Both pieces consistent.",
    "One card sits a bit proud if you overstuff. Four to six is the sweet spot.",
    "Fits front jeans pocket. Finally something that does not fight my phone.",
    "Hardware-free design. Nothing to break. Just leather and thread.",
    "Fingerprints wipe off. Pull-up marks hide small scratches well.",
    "Caught light rain in a jacket. Inside stayed dry. Edge darkened nicely.",
    "Rider called before drop. Checked the wallet at the door. Kept it.",
    "Not a big wallet person. This is the first bifold I have kept past a week.",
    "Thumb access on the slots is decent. Not fussy.",
    "Sale price made it an easy yes. Feels like a proper workshop piece.",
    "Sister said it looks like a leather shop product, not random online junk.",
    "Light dye smell the first evening, gone by morning. Then just leather.",
    "One cash compartment is enough. I do not carry a brick of notes.",
    "Kids cannot dig through it easily like a floppy cheap wallet. Structure helps.",
    "Compared next to a local market bifold. Stitching here is tighter.",
    "Faisalabad delivery took four days. Using it for office already.",
    "Interior leather matches the outside. No weird cloth patch inside.",
    "Wanted black, took brown. Glad I did. Pull-up character shows more.",
    "Driving licence sits flat without bending. That was my test.",
    "Fold was stiff at first. After pocket use it relaxed.",
    "No brand stamp shouting on the front. Quiet product. I like quiet.",
    "Gift wrap was basic. I added my own. The wallet saved the gift.",
    "Not shiny like fake leather. Matte waxed look in person.",
    "Pulling cards fifty times a day at the shop. Slots have not gone baggy.",
    "Rawalpindi COD. Paid and kept. No drama.",
    "If you stuff receipts, skip this. Cards and cash only. Perfect for me.",
    "Matches my brown belt close enough. Looks put together.",
    "Thread is thick saddle stitch, not thin machine thread that snaps.",
    "Showed a friend on video call. He asked for the link. Good sign.",
    "Moved one card to a hidden slot and the front sat flush. Sorted.",
    "Rough on things. Two months in and corners just starting to shine.",
    "Wife borrowed it for a day trip. Asked when she can get her own.",
    "Cream stitch colour matches the edge paint. Small detail, nice finish.",
    "Ordered at night, packed next day. Tracking was clear.",
    "Has structure — not paper thin. That is what I wanted from a bifold.",
    "Office access card in a front slot. Saves opening fully at the gate.",
    "Trimmed one tiny thread near a corner. Rest of stitching is clean.",
    "Looks better after a week than day one. Leather woke up.",
    "Brown hides wear better than my old tan holder did.",
    "Sits with keys in the same pocket without getting chewed up.",
    "Shorter than my previous bifold. Have not dropped a card yet.",
    "People asked where I got it. Told them Hilyah. Easy recommend.",
    "Same leather inside and out. Feels like one solid piece of work.",
    "Paid sale price on COD. No extra rider fee on my end.",
    "Travels between cities in my bag. Does not bulk the front pocket.",
    "Opens quietly. No snap click in meetings. Minor plus.",
    "Got a name initial stamped later at a local shop. Leather took it well.",
    "Does not smell like market Chinese wallets. First check passed.",
    "Six cards is comfortable. Eight is pushing it. Fair design.",
    "Mother said it looks expensive. I did not argue.",
    "Cards sit fully covered when closed. Clean closed profile.",
    "Works in shalwar pocket too. Does not flip around as much as a long wallet.",
    "Expected a cloth liner. Leather on leather instead. Why it feels dense.",
    "Photos are slightly warmer. In hand it is a cooler brown. Still accurate enough.",
    "Brother in Peshawar got his a day after me. Same quality.",
    "I do not oil leather. Still looks fine. Low maintenance.",
    "Rounded corners stop it catching the pocket seam. Small but useful.",
    "Read comments about size. Yes it is compact. That is the feature.",
    "NADRA and two banks in main slots. Left the rest at home. Life simpler.",
    "Stitch only really shows in sunlight. Nice restraint.",
    "Shop work, dry hands. Leather did not go pale or chalky.",
    "Packaging could be fancier for gifts. For personal use I do not care.",
    "Pairs with black shoes and a watch fine. Brown is flexible.",
    "If they drop this in black later I might grab that too. This one stays.",
    "Pull-up marks look unique on mine. Not identical to the listing — normal for this leather.",
    "Cash side is deep enough for a few notes folded once. No need for two compartments.",
    "Bought during sale at 2700. Felt like a steal for this leather.",
    "Customer care replied on WhatsApp about sizing. Helpful before I ordered.",
    "No card RFID talk here — just honest leather. That is fine by me.",
    "Edge paint is even all around. No thick blobs.",
    "Used it through a humid week in Multan. No weird smell after.",
    "Hidden slots are not advertised loudly but they are there and useful.",
    "My old bifold had eight slots and still felt empty. This layout is smarter.",
    "Closed thickness is what sold me. Looks slim from the side.",
    "Cream thread will darken a bit with time. Looking forward to that patina.",
    "Ordered with another piece for a cousin. Both arrived looking consistent.",
    "Not a fashion statement wallet. Just solid brown leather that works.",
    "Can hold a folded receipt behind the cash if needed. Rarely do.",
    "Opened it for a colleague. He ordered the same evening.",
    "Leather grain is real. You feel ridges under the finger.",
    "Guarantee mention gave peace of mind. Hope I never need it.",
    "Fits my hand when closed. Palm size is about right.",
    "Darker near the fold already from use. Character building.",
    "No zipper to jam. No snap to break. Fewer failure points.",
    "I am picky about smell. This passed. Pure leather after day one.",
    "Slots are not too tight, not too loose. Cards slide with a light grip.",
    "Took photos myself. Still looks like the site images.",
    "Brown wax pull-up hides coffee splash better than black did for me.",
    "One week in and I already left my old wallet in a drawer.",
    "Cash on delivery across cities is why I trust ordering again.",
    "Hand-stitched claim checks out when you look at the stitch holes.",
    "Not trying to be a traveller wallet. Everyday bifold done right.",
    "Wife likes the colour more than I expected. Bonus.",
    "Slight bow when overstuffed — do not overstuff. Obvious advice that works.",
    "Got compliments at Friday prayers. Unexpected.",
    "Keeps its shape when empty too. Not floppy.",
    "I measure wallets. This one sits under 2 cm closed with my usual cards.",
    "Burnished edge still smooth after pocket abrasion. Good finish.",
    "Will buy another colour if they make one. Trust built.",
    "No metal logo plate. Just leather. Prefer that aesthetic.",
    "Delivery guy was polite. Unboxing was quick. Wallet was the star.",
    "Pull-up shows more where I bend it open. Looks intentional, not damaged.",
    "Six slots is the right number for me. Extra would mean bulk.",
    "Compared price to a mall brand. This wins on leather feel alone.",
    "Using it as my only wallet now. Cards, cash, done.",
    "Solid purchase. Would reorder for gifting without thinking twice.",
]

# expand comments to 150 unique by light variation if needed
comments = []
seen_c = set()
for i in range(150):
    base = comments_templates[i % len(comments_templates)]
    if i < len(comments_templates):
        c = base
    else:
        # slight unique endings for extras beyond template pool
        extras = [
            " Recommend.",
            " Happy overall.",
            " Will keep using.",
            " Good buy.",
            " Solid piece.",
            " No regrets.",
            " Worth it.",
            " Daily driver now.",
        ]
        c = base.rstrip(".") + extras[i % len(extras)]
    # ensure uniqueness
    if c in seen_c:
        c = f"{base} ({i})"
    seen_c.add(c)
    comments.append(c)

assert len(names) == 150
assert len(set(names)) == 150
assert len(comments) == 150
assert len(set(comments)) == 150

# ratings: mostly 5, then 4, some 3 — target ~4.5 avg
# 90 fives, 48 fours, 12 threes = 450+192+36 = 678, avg 4.52
ratings = [5] * 90 + [4] * 48 + [3] * 12
# shuffle deterministically
rng = []
for i in range(150):
    rng.append((i * 37 + 11) % 150)
order = sorted(range(150), key=lambda i: rng[i])
ratings = [ratings[i] for i in order]
assert sum(ratings) == 678, sum(ratings)

start = date(2025, 2, 1)
dates = []
for i in range(150):
    d = start + timedelta(days=int(i * 4.1 + (i * 13) % 5))
    dates.append(d)
# unique dates
assert len(set(dates)) == 150, len(set(dates))

rows = [(201 + i, names[i], ratings[i], dates[i].isoformat(), comments[i]) for i in range(150)]
rows.sort(key=lambda r: r[3], reverse=True)

out = Path(r"c:\Users\Mahvia Sajjad\Desktop\ecoom-wallet-app\data\waxPullUpReviews.ts")
lines = [
    'import type { Review } from "./reviews";',
    "",
    "/** Extra reviews for Wax Pull Up Leather Wallet only. Loaded on demand. */",
    "export const waxPullUpExtraReviews: Review[] = [",
]
for rid, name, rating, d, comment in rows:
    name_esc = name.replace("\\", "\\\\").replace('"', '\\"')
    comment_esc = comment.replace("\\", "\\\\").replace('"', '\\"')
    lines.append("  {")
    lines.append(f"    id: {rid},")
    lines.append(f'    username: "{name_esc}",')
    lines.append(f"    rating: {rating},")
    lines.append(f'    comment: "{comment_esc}",')
    lines.append(f'    date: "{d}",')
    lines.append("  },")
lines.append("];")
lines.append("")
out.write_text("\n".join(lines), encoding="utf-8")
print("wrote", len(rows), "sum", sum(ratings), "avg", round(sum(ratings) / 150, 2), "->", out)
