
import { test, expect } from "@playwright/experimental-ct-react";
import App2752 from "../example/App2752.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2752 />);
  await expect(component).toContainText("Learn React");
});
