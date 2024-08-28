
import { test, expect } from "@playwright/experimental-ct-react";
import App2721 from "./App2721.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2721 />);
  await expect(component).toContainText("Learn React");
});
