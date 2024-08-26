
import { test, expect } from "@playwright/experimental-ct-react";
import App1069 from "../example/App1069.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1069 />);
  await expect(component).toContainText("Learn React");
});
