
import { test, expect } from "@playwright/experimental-ct-react";
import App361 from "./App361.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App361 />);
  await expect(component).toContainText("Learn React");
});
