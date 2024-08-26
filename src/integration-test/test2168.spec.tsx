
import { test, expect } from "@playwright/experimental-ct-react";
import App2168 from "../example/App2168.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2168 />);
  await expect(component).toContainText("Learn React");
});
