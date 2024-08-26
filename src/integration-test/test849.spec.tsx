
import { test, expect } from "@playwright/experimental-ct-react";
import App849 from "../example/App849.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App849 />);
  await expect(component).toContainText("Learn React");
});
