
import { test, expect } from "@playwright/experimental-ct-react";
import App1209 from "../example/App1209.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1209 />);
  await expect(component).toContainText("Learn React");
});
