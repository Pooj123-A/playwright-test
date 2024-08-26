
import { test, expect } from "@playwright/experimental-ct-react";
import App2662 from "../example/App2662.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2662 />);
  await expect(component).toContainText("Learn React");
});
