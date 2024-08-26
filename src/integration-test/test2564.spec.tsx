
import { test, expect } from "@playwright/experimental-ct-react";
import App2564 from "../example/App2564.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2564 />);
  await expect(component).toContainText("Learn React");
});
