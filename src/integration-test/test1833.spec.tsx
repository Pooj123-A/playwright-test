
import { test, expect } from "@playwright/experimental-ct-react";
import App1833 from "../example/App1833.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1833 />);
  await expect(component).toContainText("Learn React");
});
