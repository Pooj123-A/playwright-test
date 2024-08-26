
import { test, expect } from "@playwright/experimental-ct-react";
import App2369 from "../example/App2369.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2369 />);
  await expect(component).toContainText("Learn React");
});
