
import { test, expect } from "@playwright/experimental-ct-react";
import App64 from "../example/App64.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App64 />);
  await expect(component).toContainText("Learn React");
});
