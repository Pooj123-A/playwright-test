
import { test, expect } from "@playwright/experimental-ct-react";
import App2352 from "../example/App2352.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2352 />);
  await expect(component).toContainText("Learn React");
});
