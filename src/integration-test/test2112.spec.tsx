
import { test, expect } from "@playwright/experimental-ct-react";
import App2112 from "../example/App2112.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2112 />);
  await expect(component).toContainText("Learn React");
});
