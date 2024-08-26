
import { test, expect } from "@playwright/experimental-ct-react";
import App1587 from "../example/App1587.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1587 />);
  await expect(component).toContainText("Learn React");
});
