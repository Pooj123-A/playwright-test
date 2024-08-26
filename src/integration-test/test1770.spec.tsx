
import { test, expect } from "@playwright/experimental-ct-react";
import App1770 from "../example/App1770.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1770 />);
  await expect(component).toContainText("Learn React");
});
