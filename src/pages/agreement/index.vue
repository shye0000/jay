<template>
  <div class="contain">
    <!-- <div class="gutter-example">
      <a-row :gutter="16">
        <a-col class="gutter-row" :xs="{span:12}" :md="{span:12}">
          <div class="gutter-box">
            col-6
          </div>
        </a-col>
      </a-row>
    </div> -->
    <a-row :gutter="16" class="top_nav">
      <a-col
        class="gutter-row"
        :xs="{ span: 23, offset: 1 }"
        :md="{ span: 12 }"
      >
        <div class="gutter-box"  @click="goHome">
          <img class="logo"  src="../../assets/logo.png" />
        </div>
      </a-col>
      <a-col class="gutter-row" :xs="{ span: 1 }" :md="{ span: 2 }"> </a-col>
    </a-row>
    <!-- 协议 -->
    <p class="tit">AUCTION TERMS & CONDITIONS</p>
    <a-row :gutter="16" style="z-index: 88;">
      <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
        <div class="gutter-box agree">
          <p class="contact">
            These Terms and Conditions ("Terms and Conditions") apply to any use
            of the Platform and each and every auction ("Auction") conducted on
            https://jaychouxpsg.com operated by Entre One Inc. company ("The
            Auction Website") or its affiliates on behalf of one or more sellers
            (each, a "Seller") of tangible or intangible property or goods and
            it’s underlying NFT (collectively "Items" and individually an
            "Item"). The Platform and Auction Website as defined below are
            operated and under Entre One Inc.’s liability. For the avoidance of
            any doubt, any reference made to the Auction Website in these Terms
            and Conditions shall mean Entre One. Inc. PARIS SAINT-GERMAIN
            FOOTBALL is hereafter referred to as "PSG" or the "Club". Persons
            who participate in an Auction are referred to in these Terms and
            Conditions as "Users”. A User who submits the highest bid on an
            Auction is referred to in these Terms and Conditions as a "Winning
            Bidder" and shall therefore become the Owner of the Item. Offers or
            bids submitted by any User in an Auction are referred to
            individually as a "Bid" and collectively as "Bids". The Auction
            Website platform and all associated tools and serves are referred to
            in these Terms and Conditions as the "Platform". "NFT" means any
            blockchain tracked, non-fungible token (but for the avoidance of any
            doubt, does not mean the artwork or experience included in the
            purchase). "Artwork" means the original artwork created by the Club
            reproducing intellectual property rights of the Club and third
            parties.
          </p>
          <p class="contact">
            BY USING THE PLATFORM, YOU ARE ENTERING INTO A LEGALLY BINDING
            AGREEMENT WITH THE AUCTION WEBSITE AND ARE AGREEING TO THESE TERMS
            AND CONDITIONS IN THEIR ENTIRETY. IF YOU DO NOT AGREE TO THESE TERMS
            AND CONDITIONS IN THEIR ENTIRETY, YOU MAY NOT USE THE PLATFORM.
          </p>
          <p class="contact">
            1. POSTPONEMENT<br />
            The Auction Website reserves the right to postpone, extend, or
            cancel any Auction, bid, or items in any Auction at any time without
            prior notice. We may in our absolute and sole discretion change,
            update, amend, remove, or discontinue any part of the Site and the
            Content at any time without prior notice to you.
          </p>
          <p class="contact">
            2. ELIGIBILITY<br />
            By agreeing to these Terms and Conditions, you represent and warrant
            that:<br />
            - You are at least 18 years old,<br />
            - You have full right, power and authority to agree to these Terms
            and Conditions,<br />
            - You are not subject to any financial sanctions, embargoes, or
            other restrictive measures imposed by the United Nations, European
            Union, any EU country, UK Treasury or US Office of Foreign Assets
            Control (OFAC), or any governmental authority in any jurisdiction in
            which the Platform is available,
            <br />- You are not impersonating any other person,<br />
            - You will not use Platform if any applicable laws in your country
            prohibit you from doing so in accordance with these Terms and
            Conditions
            <br />
            - You are compliant with all applicable laws to which you are
            subject.
          </p>
          <p class="contact">
            2. BUYING – OWNERSHIP
            <br />Bids. The Bidder represents that they have the financial means
            to bid and make good at thresholds that may exceed $100,000. (USD).
            The Winning Bidder will not be announced until funds are verified
            and a final KYC, AML and Sanctions list verification is completed.
          </p>
          <p class="contact">
            Payment from Winning Bidder to the Auction Website shall be made
            within a maximum period of 24 hours from the close of the auction.
            All payments under this Article shall be made in USD by bank
            transfer/wire, or crypto currency to be determined by the Auction
            Site. Any conversion or other institutional fees from country of
            origin to USD will be borne by the Winning Bidder and full payment
            shall exclude such charges.
          </p>
          <p class="contact">
            Taxes. If the sale is subject to taxes, they will be separate and
            not included as part of the winning bid price. All taxes will be the
            responsibility of the Winning Bidder as provided in Article 15 of
            these Terms and Conditions.
          </p>
          <p class="contact">
            A Bidder may request to have any bid removed prior to auction close.
            Once an auction closes, all bids are irrevocable, unless otherwise
            stated on the Auction page. The Auction Website reserves the right
            to cancel any Bid for any reason at any time prior to the end of an
            Auction, or after the Auction pursuant to the Auction Website’s
            confirmation of the purchase and sale. All Auctions are subject to
            confirmation by the Auction Website and/or the Seller (Entre One),
            meaning that the Winning Bidder’s purchase of the Item(s) is subject
            to, and conditioned upon, the Auction Website’s and/or Seller’s
            approval of the purchase and sale.
          </p>
          <p class="contact">
            The non-professional User has a right of withdrawal that can be
            exercised within fourteen (14) days after the conclusion of the
            contract pursuant to European Directive 2011/83. Given the digital
            nature of the Item, and the immediate delivery of the Item after
            purchase, the withdrawal provided in such directive shall not apply,
            which is expressly acknowledged and accepted by the Winning Bidder.
          </p>
          <p class="contact">
            The Auction Website reserves the right to verify each User during
            the auction process and if further verification does not provide a
            proper KYC, AML or sanctions status, User involvement in the auction
            will be terminated at the Auction Website’s discretion.
          </p>
          <p class="contact">
            Buyer’s Premium. If the Auction page for a particular Item or Items
            indicates that a "Buyer’s Premium" is in effect for the Auction, the
            Winning Bidder will be required to pay the Buyer’s Premium, in the
            amount specified on The Auction Website page for a particular Item
            or Items, in addition to the Winning Bidder’s Bid amount in
            accordance with the "Payment" section of these Terms and Conditions.
          </p>
          <p class="contact">
            Relisting Fee: A fee of 25% of the final winning awarded bid will be
            subject to a relisting charge if any one of the following occurs:<br />
            a. Payment in full is not received within the timeline specified.<br />
            b. Payment is not in the currencies specified.<br />
            c. Upon subsequent KYC procedures bidder is deemed ineligible due to
            misrepresentation of oneself or organization.<br />
            d. Bidder does not comply with eligibility rules.<br />
            e. Bidder does not meet the financial thresholds.<br />
            f. Other items, that in good faith, fail to meet any of the
            requirement of these Terms and Conditions.
          </p>
          <p class="contact">
            Default. By placing a Bid you (A) acknowledge that the Relisting Fee
            is reasonable in scope and amount and adequately and appropriately
            compensates The Auction Website for the expense it incurs as a
            result of the Winning Bidder’s failure to comply with the payment
            terms of these Terms and Conditions, and further acknowledge that
            The Auction Website’s actual damages resulting from Winning Bidder’s
            breach of these payment terms would be impractical and extremely
            difficult to calculate, (B) acknowledge that the Item or Items may
            be sold to another User, (C) agree to pay the Relisting Fee in
            accordance with this paragraph, and (D) authorize The Auction
            Website to charge the account on file in accordance with this
            paragraph. THERE WILL BE ABSOLUTELY NO CHARGEBACKS OR DISPUTES OF
            THE RELISTING FEE.
          </p>
          <p class="contact">
            License. You acknowledge and agree that, as between you and the
            Auction Website, the latter owns legal right, title and interest in
            and to the Artwork and all the intellectual property rights therein
            for this use. The rights that you have in and to the Artwork are
            limited to those described in this license.
          </p>
          <p class="contact">
            Subject to its continued compliance with the terms of this license,
            the Auction Website grants to the Winning Bidder a Worldwide,
            non-exclusive, non-transferable, royalty-free license to use, copy,
            and display the Artwork solely for the following purposes: (i) for
            their own personal use (non-commercial business use); (ii) as part
            as a marketplace permits the purchase and sale of its Item; (iii) or
            as part as a third party website or application that permits the
            inclusion, involvement, storage or participation of the Item.
          </p>
          <p class="contact">
            The Winning Bidder agrees that they may not, nor permit any third
            party to do or attempt to do, any of the foregoing without the
            Auction Site’s express prior approval in each case: (i) modify the
            Artwork in any way, including without limitation, its shape,
            designs, colors, drawing, attributes, (ii) use the Artwork in
            connection with image, videos, or other forms of media that depict
            hatred, intolerance, violence, war, politic subject that that
            otherwise infringe the right of third parties; (iii) use the Artwork
            in movies, videos, or any other forms of media for a commercial
            business venture, (iv) attempt to trademarks, copyright or otherwise
            attempt to claim or acquire additional intellectual property right
            in or to the Artwork.
          </p>
          <p class="contact">
            To the extent that the Item reproduces third party intellectual
            property rights, Winning Bidder understands and agrees that it is
            not allowed to use the third-party intellectual property rights in
            any way except as incorporated in the Artwork.
          </p>
          <p class="contact">
            Furthermore, the Winning Bidder understands and agrees that
            additional restrictions on the use of the Item representing third
            parties’ intellectual property right may be later imposed to ensure
            compliance with the license granted by the owner of the relevant
            rights. Users expressly agree to comply with all such restrictions
            from the date of email notification of such restrictions by the
            Auction Website.
          </p>
          <p class="contact">
            Experience. The Item includes an experience as described in the
            Auction Website and which is provided by the Site directly to the
            Winning Bidder (e.g. limited exclusively to the first sale of the
            Item on the Platform) ("Experience"). The timing of the Experience
            may be postponed, and content may change to comply with the French
            Government or other competent authority taken in relation to COVID
            19. The two people shall strictly respect the health measures
            provided within the Parc des Princes Stadium or other relevant
            places. None of the marketing partners nor the seller of the NFT can
            be held responsible for this. The Experience does not include
            travels back and forth to Paris. The date of the Experience shall be
            decided by PSG.
          </p>
          <p class="contact">
            3. AUCTIONS Notice of Reserve. ALL AUCTIONS ARE WITH RESERVE. For
            auctions, notice is hereby given that in the event of a reserve, the
            Auction Website or its affiliates may implement such reserves by
            bidding on behalf of the seller, using one or more bidder numbers,
            until the lot or lots have reached a bid amount that is acceptable
            to the Seller. Notwithstanding the existence of any reserve, a
            Seller may accept a bid lower than any reserve price in its sole
            discretion.
          </p>
          <p class="contact">
            Counterbidding. Except where prohibited by applicable law, the
            Auction Website may counterbid on behalf of a Seller on any Item or
            Items.
          </p>
          <p class="contact">
            Interest. If the Auction Website has an interest in an offered Item
            or lot other than any commissions, including risk of removal,
            Seller’s objection to selling an Item or lot for a particular price,
            or any other interest, the Auction Website may bid using one or more
            "house" bidder numbers to protect such interest.
          </p>
          <p class="contact">
            Risk. Users understand and agree that access and use of the Platform
            is subject to certain risks including without limitation:<br />
            (i) Price and liquidity of blockchain assets, including the NFTs,
            are extremely volatile and may be subject to fluctuations;<br />
            (ii) Fluctuations in the price of other digital assets could
            materially and adversely affect the NFTs;<br />
            (iii) Legislative and regulatory changes or actions may adversely
            affect the use, transfer, and value of the NFTs;<br />
            (iv) NFTs are not legal tender and are not back by any
            government;<br />
            (v) Transactions involving NFTs may be irreversible, and losses due
            to fraudulent or accidental transactions may not be recoverable;
            <br />(vi) The value of NFTs may be derived from the continued
            willingness of market participants to exchange fiat currency or
            digital assets for NFTs, and therefore the value of NFTs is subject
            to the potential for permanent or total loss of value should the
            market for NFTs disappear; <br />(vii) NFTs are subject to the risk
            of fraud, counterfeiting, cyber-attacks and other technological
            difficulties which may prevent access to or use of your NFTs; and
            <br />(viii) Withdrawal of an NFT to a decentralized digital asset
            wallet is at your own risk, and the transfer for any NFT to an
            incorrect digital asset wallet address will result in the
            irreversible loss of such NFT.
          </p>
          <p class="contact">
            4. ITEM REPRESENTATION<br />
            Descriptions, photos and any other information given by the Auction
            Website or any of its agents or representatives, is solely for
            informational purposes. The Auction Website is not responsible for
            inaccurate photos, descriptions or information, express or implied.
            Users are encouraged to view items in person, when possible, and to
            do their own research and due diligence prior to bidding. All items
            in any Auction are sold "AS IS”, "WHERE IS", and "WITH ALL FAULTS"
            with no warranty, express or implied, unless otherwise stated on the
            Auction in express terms.
          </p>
          <p class="contact">
            THE AUCTION WEBSITE MAKES NO REPRESENTATIONS OR WARRANTIES
            WHATSOEVER, EXPRESS OR IMPLIED, WITH RESPECT TO ANY AUCTION OR ITEM
            OR ITEMS, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSES, TITLE AND
            NON-INFRINGEMENT. EACH USER HEREBY RELEASES THE AUCTION WEBSITE AND
            ITS REPRESENTATIVES, AFFILIATES, SUBSIDIARIES, EMPLOYEES, OFFICERS,
            DIRECTORS, ATTORNEYS OR AGENTS (“REPRESENTATIVES”) FROM ANY AND ALL
            CLAIMS THAT SUCH USER MAY NOW HAVE OR HEREAFTER ACQUIRE AGAINST THE
            AUCTION WEBSITE OR ANY REPRESENTATIVES FOR ANY DAMAGES, INJURY,
            EXPENSES, LOSSES, CLAIMS, COSTS, OR LIABILITIES ARISING FROM OR
            RELATED TO ANY ERROR, INFORMATION, OMISSION, ACT, OR CONDITION
            AFFECTING ANY ITEM OR ITEMS IN ANY MANNER WHATSOEVER. THIS SECTION
            SURVIVES ANY TERMINATION OF THESE TERMS AND CONDITIONS.
          </p>
          <p class="contact">
            5. LIMITATION OF LIABILITY<br />
            USERS VIEW AUCTIONS AND SUBMIT BID(S) AT THEIR OWN RISK. TO THE
            MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER THE AUCTION
            WEBSITE NOR ANY OF ITS REPRESENTATIVES SHALL UNDER ANY CIRCUMSTANCES
            BE LIABLE TO ANY USER (INCLUDING WINNING BIDDERS) OR THIRD PARTY FOR
            ANY DAMAGES, INJURY, EXPENSES, LOSSES, CLAIMS, COSTS, OR LIABILITIES
            ARISING FROM OR RELATED TO THE USE OF THE PLATFORM, OR PARTICIPATION
            AS A USER OR SELLER IN ANY AUCTION OR RELATED IN ANY WAY TO THE
            PLATFORM. THE FOREGOING LIMITATION OF LIABILITY EXTENDS TO ANY
            DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE OR
            EXEMPLARY DAMAGES. THIS PARAGRAPH SURVIVES ANY TERMINATION OF THESE
            TERMS AND CONDITIONS.
          </p>
          <p class="contact">
            6. INDEMNIFICATION<br />
            You agree to indemnify, defend, and hold the Auction Website and the
            Auction Website’s Representatives harmless, including any and all
            damages, losses, costs, liabilities and legal fees, from any claim
            or demand made by any third party arising out of or relating to: (A)
            your access to or use of the Platform; (B) your violation of any
            third party right, including without limitation any copyright,
            property, or privacy right; or (C) any violation of these Terms and
            Conditions. The Auction Website reserves the right, at your expense,
            to assume the exclusive defense and control of any matter subject to
            this indemnification, and you agree to cooperate in such defense.
            You agree not to settle any matter in which you have indemnity
            obligations without the Auction Website’s prior written consent.
            This paragraph survives any termination of these Terms and
            Conditions.
          </p>
          <p class="contact">
            7. LIMITED LICENSE<br />
            The Platform is owned or licensed by the Auction Website. The
            Auction Website grants Users a limited, transferable and revocable
            license to use the Platform as provided in these Terms and
            Conditions. Any copying, adapting, modifying, distribution,
            licensing, sale, transfer, display, transmission, broadcast, or
            other use of the Platform without the Auction Websites express
            written consent is prohibited. Any violation by any User of these
            Terms and Conditions, including this paragraph, may result in
            immediate termination of the limited license and right to use the
            Platform.

            <br />The Auction Website reserves the right to select which
            blockchain the Item will be placed.
          </p>
          <p class="contact">
            8. PROHIBITED USE<br />
            No User may use or access the Platform, or cause or allow the
            Platform to be used or accessed by any third party, in any way that
            violates these Terms and Conditions, including any use which:<br />
            A. Violates any law;
            <br />B. Competes with the Auction Website’s business, directly or
            indirectly, in The Auction Website’s sole discretion; <br />C.
            Impairs the Platform or any the Auction Website property, whether
            through transmission of software viruses, harmful files, or
            excessive use; <br />D. Interferes with any other User’s or the
            Auction Website’s use of the Platform; <br />E. Threatens, harms,
            harasses, misleads or deceives others, including other Users or The
            Auction Website; <br />
            F. Solicits personal information from any User; <br />
            G. Defames any other User or the Auction Website; <br />
            H. Promotes illegal substances, pornography, discrimination or
            bigotry, or other information which The Auction Website determines
            to be harmful to the Platform or The Auction Website’s business or
            any Users; <br />
            I. Creates any derivative works of the Platform, or any other
            adaptation or modification of the Platform; or <br />
            J. Attempts to gain or gains unauthorized access to the Platform in
            any manner whatsoever.
          </p>
          <p class="contact">
            9. GUEST MESSAGING<br />
            Users may submit a message via the website that may be embedded into
            the Item. The Auction Website reserves the right not to place a
            User’s message within the Item if it is deemed to violate hate
            speech and other forms of intolerant topic. The User release all
            rights to the use of the User’s First Name, Country, and Message
            Text and understand all this data is available in perpetuity within
            the Item due to the nature of Item (Non-Fungible Token).
          </p>
          <p class="contact">
            10. LEGAL DISPUTES<br />
            PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS AND WILL
            HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS YOU AND THE AUCTION WEBSITE
            HAVE AGAINST EACH OTHER ARE RESOLVED.
          </p>
          <p class="contact">
            10.1 If the claim relates to the Artwork and/or Experience included
            in the Item<br />
            The Winning Bidder agrees that any claim or dispute that has arisen,
            or may arise, between the Winning Bidder and the Club that relates
            in any way to the Artwork and/or Experience included in the Item or
            arises out of this or previous versions of these Terms and
            Conditions, will be resolved as follows:
            <br />A. Applicable Law. Except to the extent preempted or
            inconsistent by country law, the laws of France will govern any
            claim that has arisen or may arise from the same in relation to the
            Artwork and/or Experience included in the Item, without regard to
            conflict of laws principles. <br />B. In case of dispute, the
            Winning Bidder shall inform the customer service at the following
            address: contact@jaychouxpsg.com/. If the dispute remains unresolved,
            the Winning Bidder, as a consumer, may have the possibility to
            contact the online dispute resolution service of the European
            Commission at the following address "ec.europa.eu/consumers.odr”. If
            the dispute remains unresolved, the Winning Bidder may seize the
            competent jurisdiction with territorial jurisdiction under the
            applicable law. In the event there is no mandatory jurisdiction
            under the applicable law, the Court of Appeal of Paris shall be
            competent.
          </p>
          <p class="contact">
            10.2 If the claim relates to the Platform / Auction Website<br />

            <br />A. Applicable Law. Except to the extent preempted or
            inconsistent by country law, the laws of Pennsylvania, USA will
            govern any claim that has arisen or may arise from the same in
            relation to the Auction Website or Platform, without regard to
            conflict of laws principles. PSG IS NOT LIABLE FOR ANY CLAIM IN
            RELATION TO THE PLATFORM OR THE AUCTION WEBSITE OR THE BIDS.
            <br />B. Arbitration. Users and the Auction Website agree that any
            and all disputes or claims that have arisen, or may arise, between
            you and the Auction Website or its Representatives that relate in
            any way to or arise out of this or previous versions of these Terms
            and Conditions, your use of or access to the Platform, the actions
            of the Auction Website or its Representatives, or any products or
            services sold or purchased through the Platform shall be resolved
            exclusively through final and binding arbitration, rather than in
            court. Alternatively, you may assert your claims in small claims
            court, if your claims qualify and so long as the matter remains in
            such court and advances only on an individual (non-class,
            non-representative) basis. The current in Country legal system will
            govern the interpretation and enforcement of this section. <br />i.
            YOU AND THE AUCTION WEBSITE AGREE THAT EACH OF US MAY BRING CLAIMS
            AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF
            OR CLASS MEMBER IN ANY PURPORTED CLASS, OR REPRESENTATIVE OR PRIVATE
            ATTORNEY GENERAL ACTION OR PROCEEDING. UNLESS BOTH YOU AND THE
            AUCTION WEBSITE AGREE OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE
            OR JOIN MORE THAN ONE PERSON’S OR PARTY’S CLAIMS. THE ARBITRATOR MAY
            AWARD RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY
            RELIEF) ONLY IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND
            ONLY TO THE EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT
            PARTY’S INDIVIDUAL CLAIM(S). ANY RELIEF AWARDED CANNOT AFFECT OTHER
            USERS. If a court decides that applicable law precludes enforcement
            of any of this paragraph’s limitations as to a particular claim for
            relief, then that claim (and only that claim) must be severed from
            the arbitration and may be brought in court, subject to the right to
            appeal the court’s decision. All other claims will be arbitrated.
            <br />ii. Procedures. An arbitrator should apply the terms of these
            Terms and Conditions as a court would. All issues are for the
            arbitrator to decide, except for issues related to the ability or
            requirement to arbitrate or the scope or enforcement of this section
            or these Terms and Conditions. The arbitration shall be conducted by
            a designated arbitration representative under its rules and
            procedures determined by the Auction Website. If you intend to seek
            arbitration, you must first send to the Auction Website a written
            notice by certified mail specifying in detail the claim or claims
            you seek to arbitrate, including, without limitation, the date upon
            which the claim or claims were discovered, the alleged basis for
            such claim or claims, any and all relief sought, and any efforts
            prior to such written notice that were made in an effort to resolve
            the dispute. The notice must be sent to the Auction Website,
            jaychouxpsg, 18A Coal Street, Middleport PA, 17953. If you and The
            Auction Website are not able to resolve the claim or claims within
            60 days of the date of the Auction Website’s receipt of the written
            notice, you or the Auction Website may arbitrate the claim or
            claims. In addition to filing the appropriate forms with the AAA in
            accordance with its rules and procedures, you must mail a copy of
            the completed forms to the Auction Website. You may send a copy to
            the Auction Website at the following address: 18 Coal Street,
            Middleport PA, 17953. The arbitration will be held in Pennsylvania,
            USA, unless another location is mutually agreed upon. The arbitrator
            will determine the substance of the claim or claims in accordance
            with the rules and regulations and applicable law. The arbitrator
            shall not be bound by rulings in prior arbitrations involving any
            other User but is bound by any prior ruling including the same User
            who brought the instant arbitration claim or claims. The
            arbitrator’s award is final and binding and non-appealable, and
            judgment on the award rendered by the arbitrator may be entered in
            any court having proper jurisdiction. <br />iii. Costs. All fees and
            costs related to any claim submitted to arbitration are governed by
            the AAA’s rules and regulations. In any arbitration arising out of
            or related to these Terms and Conditions, the arbitrator shall award
            to the prevailing party, if any, the costs and attorneys’ fees
            reasonably incurred by the prevailing party in connection with the
            arbitration. If the prevailing party won on some but not all of the
            claims and counterclaims, the arbitrator may award the prevailing
            party an appropriate percentage of the costs and attorneys’ fees
            reasonably incurred by the prevailing party in connection with the
            arbitration. <br />
            C. Forum. In the event that the above arbitration procedures are
            found not to apply to you or to a particular claim or claims or
            dispute, you agree that any claim or claims or dispute that arises
            or has arisen shall be subject to the exclusive jurisdiction of
            Pennsylvania, USA. You and The Auction Website agree to submit to
            the personal jurisdiction of the courts located in Pennsylvania, USA
            for purposes of litigating any such claim or claims or disputes.
            <br />D. Survival. This section survives any termination of these
            Terms and Conditions.
          </p>
          <p class="contact">
            11. AMENDMENT<br />
            The Auction Website may amend these Terms and Conditions at any time
            by posting the amended Terms and Conditions on the Auction Website.
            Such amendment may include modification, addition, or removal of
            terms in these Terms and Conditions. Your continued access and/or
            use of the Platform constitutes acceptance of any such amended Terms
            and Conditions. The Auction Website may also request that you accept
            the Terms and Conditions affirmatively through the Platform.
          </p>
          <p class="contact">
            12. SEVERABILITY<br />
            Except as otherwise provided in these Terms and Conditions, if any
            provision of the Terms and Conditions is held to be invalid, void or
            for any reason unenforceable, such provision shall be struck out and
            shall not affect the validity and enforceability of the remaining
            provisions.
          </p>
          <p class="contact">
            13. AUTHORITY<br />
            If you create an account or use an account on the Platform on behalf
            of an entity, you represent and warrant that you are authorized to
            act on behalf of said entity and are able to bind such entity to
            these Terms and Conditions. By creating an account or using such an
            account on the Platform, you understand that the Auction Website is
            relying on your representation and warranty by allowing the entity’s
            participation in Auctions and use of the Platform. The creation of
            an account by and User for or on behalf of any other person is
            strictly prohibited. The use of any account by a person who is not
            the owner (or authorized agent, if the account is registered to an
            entity) of such account is strictly prohibited. The Auction Website
            may terminate your ability and/or the account holder’s ability to
            use the Platform or participate in Auctions, or cancel any Bids
            placed by you or the account holder (under the same account or
            otherwise) for violation of the terms and conditions in this
            section.
          </p>
          <p class="contact">
            14. REQUIRED INFORMATION<br />
            All forms and other required information must be completed prior to
            a bid being presented or accepted. If forms are incomplete, contain
            falsified information, or is determined by the Auction Website or
            their partners, at its sole discretion, to be invalid, any such bid
            associated with that account shall be deemed null and void. All top
            bidders will go through additional KYC, account funding verification
            and other validation procedures deemed necessary for final auction
            completion.
          </p>
          <p class="contact">
            15. TAX AND SOCIAL SECURITY OBLIGATIONS<br />
            Attention is drawn to the Winning Bidder and subsequent buyers that
            the sale of the Item is likely, according to applicable tax
            legislation, to constitute taxable income, in particular when the
            sale price of the Item is higher than its purchase price. Users are
            strongly advised to contact the competent tax lawyer and social
            security authorities to ensure that they meet their tax, and where
            applicable social security obligations. It is the sole reasonability
            of the Users to declare the income from the sale of the Item to the
            competent bodies.
          </p>
          <p class="contact">
            16. PRIVACY AND DATA POLICY<br />
            16.1 Our website address is https://www.jaychouxpsg.com/. Data and
            Users privacy is very important to the Auction Website which will
            always be open and transparent about how it handles Users data. This
            policy sets out how Users personal data will be processed and
            protected by https://www.jaychouxpsg.com/. By accessing
            https://www.jaychouxpsg.com/ or by using the Auction Website
            services, you are accepting and consenting to the practices set out
            in this Privacy Policy and Terms and Conditions. You are free to use
            the Platform without providing any information to the Auction
            Website. The Auction Website will only collect personal data if you
            choose to partake in one of its engagements or interactions or apply
            to feature on its asset sale schedules.

            <br />16.2 What personal data the Auction Website collects and why

            <br />The Auction Website collects, uses and shares Aggregated Data.
            This type of data may be derived from the Users personal data but is
            not classed as personal data in law and does not directly or
            indirectly reveal the Users identity. It is used by the Auction
            Website team to collect statistical or demographic data for the
            website and email, for example, to assess how popular a specific
            product has been received. The Auction Website also collects
            non-identifiable data, such as Users crypto wallet address, should
            they enter one on the Auction Website. This is to allow the Auction
            Website to distribute access to those acquiring different level of
            engagement through a reward system. The Auction Website collects
            only necessary and relevant information.
          </p>
          <p class="contact">
            In some cases, Users give the Auction Website personal information
            directly, in particular when Users create an account, make a
            purchase, sign up for our newsletters, take part in a competition or
            contact us via the Auction Website.
          </p>
          <p class="contact">
            The information Users provide to Auction Website includes:<br />

            Data enabling the Auction Website to identify Users (last name,
            first names, title, date of birth, identity document, nickname)<br />
            Users contact details (in particular Users email address and
            telephone number)<br />
            Data related to transactions carried out on the Auction Website)<br />
            Payment data and information about the transaction for the
            Auction<br />
            Your views and comments shared on the Auction Website<br />
            User profile data (including personal preference data and message
            information) if any<br />
            When Users access services on the Auction Website publish a
            technical cookie. This cookie is used to keep the User signed in.
          </p>
          <p class="contact">
            The personal data the Auction Website collects automatically and
            directly from Users when Users use the Auction Website services
            include:
          </p>
          <p class="contact">
            The IP address and identifiers of the device, only on the
            Platform<br />
            Technical data relating to the device and the Platform (the name and
            version of your device’s operating system, name and model of the
            device, version of the App, preferred language)<br />
            Technical data relating to the browser and the device used (name and
            operating system of your device, preferred language) to access our
            Platform<br />
            Authentication data (account creation, login and use logs and unique
            identifier)<br />
            Browsing data (Websites and Apps visited, most recent pages visited,
            ads clicked, products searched, pages visited, clicks, length of
            visit, products placed in your basket, etc.)<br />
            Location data relating to your use of the Platform with your
            consent.
          </p>
          <p class="contact">
            HOW WE USE YOUR DATA
          </p>
          <p class="contact">
            The Auction Website uses Users personal data to:
          </p>
          <p class="contact">
            Supply you with the Item and services you ask for<br />
            Process and track the bids, including Item delivery<br />
            Communicate with Users about your bids<br />
            Reply to Users questions, resolve any problems<br />
            Register Users participation in the Auction,<br />
            Manage payment for the Users purchases.<br />
            To place your preferred message into the NFT smart contract at our
            discretion.<br />
            The Auction Website also processes data for purposes other than
            strict performance of the contract, provided that we have first
            assured ourselves that we have a legitimate interest in such
            processing. We may process Users data for the following purposes:
          </p>
          <p class="contact">
            To undertake research and build statistics in order to improve Users
            experience<br />
            To analyze how products and services are used in order to improve
            our offer<br />
            To identify and correct any bugs that may arise on the Platform, in
            order to ensure that it operates effectively<br />
            To protect Users against any fraudulent transaction or
            malpractice<br />
            To protect the Auction Website rights to a defense in court
            proceedings and the management of disputes<br />
            To ensure that Users can exercise your rights.<br />
            ACCESS TO USERS PERSONAL DATA
          </p>
          <p class="contact">
            The Winning Bidder personal data will be transferred to PSG for the
            sole purpose of this latter to provide the experience and according
            to Article 10.1 of these Terms and Conditions.
          </p>
          <p class="contact">
            None of Users personal data will be given to our partners for the
            purposes of marketing or commercial prospecting. Moreover, we ensure
            that partners and providers involved in the delivery of services
            comply with the principles arising from current legislation.
          </p>
          <p class="contact">
            DURATION OF STORAGE OF USERS PERSONAL DATA
          </p>
          <p class="contact">
            Users personal data will be stored for as long as is necessary for
            the purposes set out in this Policy, up to the legal limits. This
            means that we will store Users personal data provided that Users
            have logged in to the Auction Website account during the last three
            years.
          </p>
          <p class="contact">
            SECURITY OF USERS PERSONAL DATA
          </p>
          <p class="contact">
            The Auction Website implement appropriate organizational and
            technical measures to protect Users data. Generally, the Auction
            Website do everything it can to protect personal data, taking
            account of the sensitivity of the information in question and the
            potential risks arising from processing and its implementation. The
            Auction Website takes every action necessary to ensure the
            confidentiality, integrity, availability and resilience of Users
            data. Moreover, the Auction Website is careful to store Users
            personal data in information systems offering an appropriate level
            of security, with protected, restricted and recorded access.
          </p>
          <p class="contact">
            The Auction Website enters into strict confidentiality agreements
            with all those involved in processing data on its behalf. The
            Auction Website also ensures that all staff and other individuals
            involved in processing data comply with all the data protection
            rules and undertake to protect the confidentiality of the data
            processed.
          </p>
          <p class="contact">
            If you believe that your personal data have been used in an
            inappropriate manner by a third party, we would be grateful if you
            could inform us immediately by email to: contact@jaychouxpsg.com
          </p>
          <p class="contact">
            USERS RIGHTS
          </p>
          <p class="contact">
            Under the legislation, Users have the following rights:<br />

            Right of access - allowing the User to obtain information about the
            processing of its personal data, and a copy of them;<br />
            Right of rectification - allowing the User to require that its
            personal data corrected if they are inaccurate;<br />
            Right to erasure / right to be forgotten - allowing the User to have
            its personal data erased or deleted;<br />
            Right to limitation - allowing the User to ask for a limitation on
            the processing the Auction Website carries out on your personal
            data;<br />
            Right to portability - allowing the User to obtain an electronic
            copy or transfer of its data from one database to another;<br />
            Users may also send us instructions for the storage, erasure, or
            communication of its data in the event of death and appoint the
            person who will be responsible.<br />
            These rights are not absolute, but are to be exercised under the
            terms and within the limits laid down by the legislation.
          </p>
          <p class="contact">
            If Users have created an account, it is easy to change some of its
            Data using the "My Account" function on the Auction Website.
          </p>
          <p class="contact">
            If you are the legal representative of a child aged under 16 and you
            believe that the child has given us information without your
            consent, you can contact us at the address below so that we can
            delete the information and if necessary close the account.
          </p>
          <p class="contact">
            EXERCISE USERS RIGHTS
          </p>
          <p class="contact">
            User can exercise your rights at any time reaching us at
            contact@jaychouxpsg.com
          </p>
          <p class="contact">
            CHANGES TO OUR PERSONAL DATA PROTECTION POLICY
          </p>
          <p class="contact">
            Legislation and practice change over time. The Auction Website
            therefore reserves the right to change the Personal Data Protection
            Policy at any time to adjust to such changes.
          </p>
          <p class="contact">
            In the event of changes, the Personal Data Protection Policy will be
            republished on the Auction Website or Platform so that Users can
            find out directly.
          </p>
          <p class="contact">
            16.3 About Google Analytics and social media The Auction Website
            collects data using our own technology and may use Google Analytics
            to collect Aggregated Data. The Auction Website is able to collect
            non-identifiable data, such as your crypto wallet address, via a
            giveaway or application form. These links are hosted on
            nftinsider.io, but may be accessible from other sources, such as our
            social media outlets. CONTACT US If you have any questions about the
            use of your data or wish to let us know of any comments or concerns,
            you can contact our Data Protection Officer at the following
            address: contact@jaychouxpsg.com
          </p>
          <p class="contact">
            17. GOVERNING LAW AND JURIDISDICTION These Terms and Conditions are
            governed by and shall be construed in accordance with the laws of
            Pennsylvania, United States of America, without regard to any choice
            or conflict of laws rules, except as expressly provided in Article
            10.1 of these Terms and Conditions. Any dispute, controversy or
            claim, whether contractual or non-contractual, arising out of or in
            connection with these Terms and Conditions, or the breach,
            termination or invalidity thereof, or any other issue which shall
            arise in virtue of these Terms and Conditions, shall be referred to
            and finally settled according to the provisions set out in Article
            10 above. Terms & Conditions
          </p>
        </div>
      </a-col>
    </a-row>
    <a-row :gutter="16" class="mid"> </a-row>
    <a-row :gutter="16" class="footer">
      <a-col class="gutter-row" :xs="{ span: 24 }" :md="{ span: 24 }">
        <div class="gutter-box">
          <p class="footer_title">
            *NFTs are one-of-a-kind items with digital certificates of
            authenticity. Buying and owning an NFT means you have a certificate
            of ownership. Your authentic, verifiable NFTs are stored on the
            Blockchain, a secure and transparent digital ledger.
          </p>
          <p class="footer_title">© 2022 Paris Saint-Germain and JHB.fr</p>
          <p class="footer_agreement" @click="goDetail">Terms & Conditions</p>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyword: ""
    };
  },
  methods: {
    onSearch(e) {
      console.log(e);
    },
    goDetail() {
      this.$router.push({ path: "/agreement" });
    },
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style scoped>
.contain {
  color: #fff;
  height: 100vh;
  background: url("../../assets/nbg.png") no-repeat center;
  background-size: cover;
}
.logo {
  width: 152px;
  height: 152px;
  z-index: 999;
}
.top_nav {
  padding-top: 30px;
}
.igs {
  margin: 0 20px;
}
.igs_box {
  text-align: right;
  margin-top: 30px;
}
.mid {
  /* background: url("../../assets/person.png") no-repeat center; */
  background-size: cover;
  position: absolute;
  top: 50%;
  height: 50%;
  width: 100%;
  margin-top: -12.5%; /* 为高度的一半 */
}
.mid_title {
  font-family: "PSG-Regular";
  font-size: 108px;
  text-align: center;
  line-height: 1;
  margin-top: 20px;
  /* font-family: "PSG-inline"; */
  /* font-family: "PSG-Light"; */
  /* font-family: "PSG-Regular"; */
}
.mid_title2 {
  font-family: "PSG-Regular";
  font-size: 52px;
  text-align: center;
  line-height: 1;
}
.mid_title3 {
  font-family: "PSG-Regular";
  font-size: 58px;
  text-align: center;
  line-height: 1;
}
.ipt {
  max-width: 840px;
  margin: auto;
  font-family: "PSG-Regular";
  margin-top: 130px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
.footer {
  width: 100%;
  position: absolute;
  bottom: 5px;
  text-align: center;
  margin: 0 auto;
}
.footer_agreement {
  color: #ceae59;
  font-family: "PSG-Regular";
  margin-top: 15px;
  display: inline-block;
}
.footer_agreement:hover {
  color: #40a9ff;
  cursor: pointer;
}
.footer_title {
  font-family: "PSG-Regular";
  line-height: 1;
}
.agree {
  z-index: 999;
  max-width: 1200px;
  margin: auto;
  height: 58vh;
  overflow-y: auto;
}
.agree::-webkit-scrollbar {
  display: none;
}
.tit {
  text-align: center;
  font-family: "PSG-inline";
   /* font-family: 'Abhaya Libre ExtraBold'; */
  font-size: 60px;
  position: absolute;
  top: 12vh;
  width: 100%;
  z-index: 99;
}
.contact {
  font-family: "PSG-Light";
  margin-top: 30px;
}
@media screen and (max-width: 750px) {
  .top_nav {
    padding-top: 15px;
  }
  .logo {
    width: 15%;
    height: 15%;
  }
  .tit {
    font-size: 40px;
  }
  .agree {
    margin-top: 19vh;
    height: 45vh;
    padding-left: 3%;
    padding-right: 3%;
  }
}
</style>
