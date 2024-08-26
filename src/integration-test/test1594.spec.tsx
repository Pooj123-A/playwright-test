
import { test, expect } from "@playwright/experimental-ct-react";
import App1594 from "../example/App1594.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1594 />);
  await expect(component).toContainText("Learn React");
});
