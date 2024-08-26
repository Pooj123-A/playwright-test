
import { test, expect } from "@playwright/experimental-ct-react";
import App2761 from "../example/App2761.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2761 />);
  await expect(component).toContainText("Learn React");
});
