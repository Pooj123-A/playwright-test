
import { test, expect } from "@playwright/experimental-ct-react";
import App2329 from "../example/App2329.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2329 />);
  await expect(component).toContainText("Learn React");
});
