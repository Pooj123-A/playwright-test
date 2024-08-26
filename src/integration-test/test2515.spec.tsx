
import { test, expect } from "@playwright/experimental-ct-react";
import App2515 from "../example/App2515.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2515 />);
  await expect(component).toContainText("Learn React");
});
