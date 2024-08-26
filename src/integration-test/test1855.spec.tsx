
import { test, expect } from "@playwright/experimental-ct-react";
import App1855 from "../example/App1855.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1855 />);
  await expect(component).toContainText("Learn React");
});
