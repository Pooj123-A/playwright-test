
import { test, expect } from "@playwright/experimental-ct-react";
import App1164 from "../example/App1164.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1164 />);
  await expect(component).toContainText("Learn React");
});
