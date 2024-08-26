
import { test, expect } from "@playwright/experimental-ct-react";
import App1287 from "../example/App1287.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1287 />);
  await expect(component).toContainText("Learn React");
});
