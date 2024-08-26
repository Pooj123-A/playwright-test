
import { test, expect } from "@playwright/experimental-ct-react";
import App1781 from "../example/App1781.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1781 />);
  await expect(component).toContainText("Learn React");
});
