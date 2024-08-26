
import { test, expect } from "@playwright/experimental-ct-react";
import App1598 from "../example/App1598.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1598 />);
  await expect(component).toContainText("Learn React");
});
