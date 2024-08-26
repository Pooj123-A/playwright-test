
import { test, expect } from "@playwright/experimental-ct-react";
import App1727 from "../example/App1727.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1727 />);
  await expect(component).toContainText("Learn React");
});
