
import { test, expect } from "@playwright/experimental-ct-react";
import App1661 from "../example/App1661.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1661 />);
  await expect(component).toContainText("Learn React");
});
