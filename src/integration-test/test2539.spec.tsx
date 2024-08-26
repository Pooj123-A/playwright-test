
import { test, expect } from "@playwright/experimental-ct-react";
import App2539 from "../example/App2539.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2539 />);
  await expect(component).toContainText("Learn React");
});
