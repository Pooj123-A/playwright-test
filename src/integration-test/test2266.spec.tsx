
import { test, expect } from "@playwright/experimental-ct-react";
import App2266 from "../example/App2266.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2266 />);
  await expect(component).toContainText("Learn React");
});
