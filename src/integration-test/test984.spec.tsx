
import { test, expect } from "@playwright/experimental-ct-react";
import App984 from "../example/App984.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App984 />);
  await expect(component).toContainText("Learn React");
});
