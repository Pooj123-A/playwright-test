
import { test, expect } from "@playwright/experimental-ct-react";
import App2782 from "../example/App2782.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2782 />);
  await expect(component).toContainText("Learn React");
});
