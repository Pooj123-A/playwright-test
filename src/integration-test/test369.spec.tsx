
import { test, expect } from "@playwright/experimental-ct-react";
import App369 from "../example/App369.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App369 />);
  await expect(component).toContainText("Learn React");
});
