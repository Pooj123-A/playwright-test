
import { test, expect } from "@playwright/experimental-ct-react";
import App444 from "../example/App444.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App444 />);
  await expect(component).toContainText("Learn React");
});
