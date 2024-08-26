
import { test, expect } from "@playwright/experimental-ct-react";
import App2770 from "../example/App2770.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2770 />);
  await expect(component).toContainText("Learn React");
});
