
import { test, expect } from "@playwright/experimental-ct-react";
import App2257 from "../example/App2257.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2257 />);
  await expect(component).toContainText("Learn React");
});
