
import { test, expect } from "@playwright/experimental-ct-react";
import App1717 from "../example/App1717.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1717 />);
  await expect(component).toContainText("Learn React");
});
