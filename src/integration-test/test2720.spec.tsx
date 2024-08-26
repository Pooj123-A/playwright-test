
import { test, expect } from "@playwright/experimental-ct-react";
import App2720 from "../example/App2720.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2720 />);
  await expect(component).toContainText("Learn React");
});
