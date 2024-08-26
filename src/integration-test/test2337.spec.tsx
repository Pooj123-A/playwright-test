
import { test, expect } from "@playwright/experimental-ct-react";
import App2337 from "../example/App2337.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2337 />);
  await expect(component).toContainText("Learn React");
});
