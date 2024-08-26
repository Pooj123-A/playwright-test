
import { test, expect } from "@playwright/experimental-ct-react";
import App2968 from "../example/App2968.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2968 />);
  await expect(component).toContainText("Learn React");
});
