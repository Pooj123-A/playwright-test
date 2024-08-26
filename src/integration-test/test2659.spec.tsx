
import { test, expect } from "@playwright/experimental-ct-react";
import App2659 from "../example/App2659.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2659 />);
  await expect(component).toContainText("Learn React");
});
