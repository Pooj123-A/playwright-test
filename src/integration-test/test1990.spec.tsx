
import { test, expect } from "@playwright/experimental-ct-react";
import App1990 from "../example/App1990.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1990 />);
  await expect(component).toContainText("Learn React");
});
