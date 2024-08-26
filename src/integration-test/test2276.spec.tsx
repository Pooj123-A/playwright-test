
import { test, expect } from "@playwright/experimental-ct-react";
import App2276 from "../example/App2276.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2276 />);
  await expect(component).toContainText("Learn React");
});
